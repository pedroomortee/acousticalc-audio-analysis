import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import wasmFactory from 'essentia.js/dist/essentia-wasm.web.js';
import EssentiaCore from 'essentia.js/dist/essentia.js-core.es.js';
import { analyzePcm, selectAnalysisWindow } from '../src/analysis.js';
import { __resetEssentiaLoaderForTests } from '../src/essentia-loader.js';
import { handleAnalyzeMessage } from '../src/worker.js';
import type { EssentiaApi, NativeVector } from '../src/essentia-types.js';

const sampleRate = 44_100;
const noteFrequencies: Record<string, number> = {
  C: 261.63, 'C#': 277.18, D: 293.66, 'D#': 311.13, E: 329.63,
  F: 349.23, 'F#': 369.99, G: 392, 'G#': 415.3, A: 440, 'A#': 466.16, B: 493.88,
};

function syntheticClicks(bpm: number, seconds = 60): Float32Array {
  const pcm = new Float32Array(seconds * sampleRate);
  const interval = Math.round(sampleRate * 60 / bpm);
  const pulseLength = Math.round(sampleRate * 0.005);
  for (let beat = 0; beat < pcm.length; beat += interval) {
    for (let i = 0; i < pulseLength && beat + i < pcm.length; i++) pcm[beat + i] = (1 - i / pulseLength) * (i === 0 ? 0.95 : 0.7);
  }
  return pcm;
}

function chordTrack(chords: string[][], seconds = 60): Float32Array {
  const pcm = new Float32Array(seconds * sampleRate);
  const chordLength = pcm.length / chords.length;
  chords.forEach((chord, chordIndex) => {
    const start = Math.floor(chordIndex * chordLength);
    const end = Math.floor((chordIndex + 1) * chordLength);
    for (let index = start; index < end; index++) {
      const time = index / sampleRate;
      const within = (index - start) / (end - start);
      const envelope = Math.min(1, within * 20, (1 - within) * 20);
      let value = 0;
      for (const note of chord) {
        const frequency = noteFrequencies[note];
        value += Math.sin(2 * Math.PI * frequency * time) + 0.35 * Math.sin(4 * Math.PI * frequency * time);
      }
      pcm[index] = envelope * value / (chord.length * 2);
    }
  });
  return pcm;
}

function vector<T>(values: T[]): NativeVector<T> {
  return {
    size: () => values.length,
    get: (index) => values[index],
    push_back: (value) => { values.push(value); },
    delete: () => {},
  };
}

function fakeEssentia(bpm: number, key: string, scale: 'major' | 'minor', hpcp: number[]): EssentiaApi {
  return {
    module: {
      VectorFloat: class { values: number[] = []; push_back(value: number) { this.values.push(value); } size() { return this.values.length; } get(i: number) { return this.values[i]; } delete() {} },
      VectorVectorFloat: class { rows: NativeVector<number>[] = []; push_back(row: NativeVector<number>) { this.rows.push(row); } size() { return this.rows.length; } get(i: number) { return this.rows[i]; } delete() {} },
      vectorToArray: (value: NativeVector<number>) => Float32Array.from(Array.from({ length: value.size() }, (_, index) => value.get(index))),
      arrayToVector: (values: ArrayLike<number>) => vector(Array.from(values)),
    },
    arrayToVector: (values: ArrayLike<number>) => vector(Array.from(values)),
    FrameGenerator: () => ({ size: () => 4, get: () => vector(new Array(4096).fill(0)), push_back() {}, delete() {} }),
    TuningFrequencyExtractor: () => ({ tuningFrequency: vector([440]) }),
    Windowing: () => ({ frame: vector(new Array(4096).fill(0)) }),
    Spectrum: () => ({ spectrum: vector(new Array(2049).fill(0)) }),
    SpectralPeaks: () => ({ frequencies: vector([440]), magnitudes: vector([1]) }),
    HPCP: () => ({ hpcp: vector(hpcp) }),
    Key: () => ({ key, scale, strength: 0.9 }),
    KeyExtractor: () => ({ key, scale, strength: 0.9 }),
    PercivalBpmEstimator: () => ({ bpm }),
    RhythmExtractor2013: () => ({ bpm, confidence: 4.2, ticks: vector([0, 60 / bpm, 120 / bpm, 180 / bpm]), estimates: vector([bpm]), bpmIntervals: vector([60 / bpm]) }),
    BeatTrackerMultiFeature: () => ({ ticks: vector([0, 0.5, 1, 1.5]), confidence: 2 }),
    LogSpectrum: () => ({ logFreqSpectrum: vector(new Array(256).fill(0)), meanTuning: vector([0]), localTuning: 0 }),
    NNLSChroma: () => ({ chromagram: [], bassChromagram: [] }),
    ChordsDetection: () => ({ chords: ['Am'], strength: vector([0.9]) }),
  };
}

// Essentia HPCP36 uses A as bin 0 (three bins per semitone), not C.
const aMinorHpcp = Array.from({ length: 36 }, (_, index) => ({ 0: 0.3, 3: 0.05, 6: 0.2, 12: 0.05, 18: 0.22, 21: 0.1, 27: 0.08 })[index] ?? 0);
const dMajorHpcp = Array.from({ length: 36 }, (_, index) => ({ 0: 0.1, 6: 0.1, 9: 0.1, 12: 0.1, 15: 0.1, 18: 0.1, 24: 0.1, 27: 0.1, 30: 0.1 })[index] ?? 0);
const cMajorHpcp = Array.from({ length: 36 }, (_, index) => ({ 0: 0.2, 3: 0.1, 6: 0.05, 12: 0.2, 15: 0.1, 18: 0.25, 21: 0.1, 27: 0.05, 30: 0.05 })[index] ?? 0);
const k6CorpusModule = process.env.ACOUSTICALC_K6_CORPUS_MODULE;
const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
const originalDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
let realEssentia: EssentiaApi;

beforeAll(async () => {
  Object.defineProperty(globalThis, 'window', { configurable: true, value: {} });
  Object.defineProperty(globalThis, 'document', { configurable: true, value: { currentScript: null, createElement: () => ({}) } });
  const wasmBinary = await readFile(new URL('../node_modules/essentia.js/dist/essentia-wasm.web.wasm', import.meta.url));
  const wasmModule = await wasmFactory({ wasmBinary, locateFile: (file: string) => file });
  realEssentia = new EssentiaCore(wasmModule, false) as unknown as EssentiaApi;
});

afterAll(() => {
  __resetEssentiaLoaderForTests();
  if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow);
  else Reflect.deleteProperty(globalThis, 'window');
  if (originalDocument) Object.defineProperty(globalThis, 'document', originalDocument);
  else Reflect.deleteProperty(globalThis, 'document');
});

describe('K1–K8 acceptance criteria', () => {
  it('K1: Essentia 0.1.3 estimates a 128 BPM kick pattern within 1 BPM', async () => {
    const result = await analyzePcm(realEssentia, syntheticClicks(128, 12), { withChords: false });
    expect(result.bpm.bpm).toBeCloseTo(128, 0);
  });

  it('K2: Essentia 0.1.3 preserves a 174 BPM kick pattern instead of returning 87 BPM', async () => {
    const result = await analyzePcm(realEssentia, syntheticClicks(174, 12), { withChords: false });
    expect(result.bpm.bpm).toBeCloseTo(174, 0);
  });

  it('K3: Essentia 0.1.3 estimates a 90 BPM kick pattern within 1 BPM', async () => {
    const result = await analyzePcm(realEssentia, syntheticClicks(90, 12), { withChords: false });
    expect(result.bpm.bpm).toBeCloseTo(90, 0);
  });

  it.each([128, 174, 90])('K1–K3: makes a 5 ms click fixture at %i BPM', (bpm) => {
    const pcm = syntheticClicks(bpm);
    expect(pcm.length).toBe(60 * sampleRate);
    expect(pcm.filter((value) => value > 0).length).toBeGreaterThan(60 * sampleRate * 0.004);
  });

  it.each([128, 174, 90])('K1–K3: keeps the fused tempo at %i BPM (174 is not halved to 87)', async (bpm) => {
    const result = await analyzePcm(fakeEssentia(bpm, 'A', 'minor', aMinorHpcp), new Float32Array(sampleRate).fill(0.1), { withChords: false });
    expect(result.bpm.bpm).toBe(bpm);
    expect(result.bpm.rounded).toBe(bpm);
  });

  it('K4: analyzes Am–F–C–G and reports La menor / 8A', async () => {
    const pcm = chordTrack([['A', 'C', 'E'], ['F', 'A', 'C'], ['C', 'E', 'G'], ['G', 'B', 'D']]);
    const result = await analyzePcm(fakeEssentia(120, 'A', 'minor', aMinorHpcp), pcm, { withChords: false });
    expect(result.key.nameEs).toBe('La menor');
    expect(result.key.camelot).toBe('8A');
  });

  it('K4 disambiguation: preserves a clear C-major tonic despite a C-major relative-candidate bonus', async () => {
    const pcm = chordTrack([['C', 'E', 'G'], ['F', 'A', 'C'], ['G', 'B', 'D'], ['C', 'E', 'G']], 12);
    const result = await analyzePcm(fakeEssentia(120, 'C', 'major', cMajorHpcp), pcm, { withChords: false });
    expect(result.key.nameEn).toBe('C major');
    expect(result.key.camelot).toBe('8B');
  });

  it('K4 integration: Essentia 0.1.3 detects Am / 8A in the Am–F–C–G progression', async () => {
    const pcm = chordTrack([['A', 'C', 'E'], ['F', 'A', 'C'], ['C', 'E', 'G'], ['G', 'B', 'D']], 12);
    const result = await analyzePcm(realEssentia, pcm, { withChords: false });
    expect(result.key.nameEn).toBe('A minor');
    expect(result.key.camelot).toBe('8A');
  });

  it('K4 integration: Essentia 0.1.3 detects the Am–F–C–G chord spans in the synthetic progression', async () => {
    const pcm = chordTrack([['A', 'C', 'E'], ['F', 'A', 'C'], ['C', 'E', 'G'], ['G', 'B', 'D']], 12);
    const result = await analyzePcm(realEssentia, pcm);
    expect(result.chords?.spans.map((span) => span.chord)).toEqual(['Am', 'F', 'C', 'G']);
    expect(result.chords?.confidence).toBeGreaterThan(0.8);
  }, 30_000);

  it('K5: the I–IV–V–I fixture has D major as its harmonic root and 10B Camelot key', async () => {
    const pcm = chordTrack([['D', 'F#', 'A'], ['G', 'B', 'D'], ['A', 'C#', 'E'], ['D', 'F#', 'A']], 4);
    const result = await analyzePcm(fakeEssentia(120, 'D', 'major', dMajorHpcp), pcm, { withChords: false });
    expect(result.key.camelot).toBe('10B');
  });

  it('K5 integration: Essentia 0.1.3 identifies the synthetic D-major I–IV–V–I as D major / 10B', async () => {
    const pcm = chordTrack([['D', 'F#', 'A'], ['G', 'B', 'D'], ['A', 'C#', 'E'], ['D', 'F#', 'A']], 12);
    const result = await analyzePcm(realEssentia, pcm, { withChords: false });
    expect(result.key.nameEn).toBe('D major');
    expect(result.key.camelot).toBe('10B');
  });

  it.skipIf(!k6CorpusModule)('K6: supports ten manually verified songs supplied by the maintainer', async () => {
    const corpusModule = await import(/* @vite-ignore */ pathToFileURL(resolve(k6CorpusModule!)).href);
    const realCorpus = corpusModule.default as Array<{ pcm: Float32Array; key: string; bpm: number }>;
    expect(realCorpus).toHaveLength(10);
    for (const track of realCorpus) {
      expect(track.pcm).toBeInstanceOf(Float32Array);
      expect(track.key).toBeTruthy();
      expect(track.bpm).toBeGreaterThan(0);
      const result = await analyzePcm(realEssentia, track.pcm, { withChords: false });
      expect(`${result.key.tonic} ${result.key.mode}`).toBe(track.key);
      expect(result.bpm.bpm).toBeCloseTo(track.bpm, -1);
    }
  }, 120_000);

  it('K7: rejects digital silence before touching Essentia', async () => {
    const arrayToVector = vi.fn();
    await expect(analyzePcm(
      { arrayToVector } as unknown as EssentiaApi,
      new Float32Array(2 * sampleRate),
      { withChords: false },
    )).rejects.toThrow(/silencio/i);
    expect(arrayToVector).not.toHaveBeenCalled();
  });

  it('K7: audio without HPCP frames is rejected instead of inventing a key', async () => {
    const silentEssentia = fakeEssentia(0, 'A', 'minor', new Array(36).fill(0));
    const noKey = Object.assign(silentEssentia, {
      FrameGenerator: () => ({ size: () => 0, get: () => vector([]), push_back() {}, delete() {} }),
    });
    await expect(analyzePcm(noKey, new Float32Array(2 * sampleRate).fill(0.01), { withChords: false }))
      .rejects.toThrow(/tonalidad/);
  });

  it('K7 integration: the worker returns a serializable error for digital silence with the real engine', async () => {
    __resetEssentiaLoaderForTests(async () => realEssentia);
    const post = vi.fn();
    await handleAnalyzeMessage(
      { type: 'analyze', pcm: new Float32Array(2 * sampleRate), sampleRate, withChords: false },
      post,
    );
    expect(post.mock.calls.map(([response]) => response.type)).toEqual(['progress', 'error']);
    const last = post.mock.calls.at(-1)?.[0];
    expect(last).toMatchObject({ type: 'error', error: expect.stringMatching(/silencio/i) });
    expect(last).not.toHaveProperty('result');
    expect(() => JSON.stringify(post.mock.calls)).not.toThrow();
  }, 30_000);

  it('K8: uses the centered 60 seconds by default and supports complete analysis', () => {
    const pcm = new Float32Array(600 * sampleRate);
    const window = selectAnalysisWindow(pcm);
    expect(window.pcm.length).toBe(60 * sampleRate);
    expect(window.startSeconds).toBe(270);
    expect(window.notice).toContain('60 s centrales');
    expect(selectAnalysisWindow(pcm, true).pcm).toBe(pcm);
  });
});
