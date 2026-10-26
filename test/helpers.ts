import { readFile } from 'node:fs/promises';
import wasmFactory from 'essentia.js/dist/essentia-wasm.web.js';
import EssentiaCore from 'essentia.js/dist/essentia.js-core.es.js';
import type { EssentiaApi, NativeVector } from '../src/essentia-types.js';

export const sampleRate = 44_100;

const noteFrequencies: Record<string, number> = {
  C: 261.63, 'C#': 277.18, D: 293.66, 'D#': 311.13, E: 329.63,
  F: 349.23, 'F#': 369.99, G: 392, 'G#': 415.3, A: 440, 'A#': 466.16, B: 493.88,
};

export function syntheticClicks(bpm: number, seconds = 60): Float32Array {
  const pcm = new Float32Array(seconds * sampleRate);
  const interval = Math.round(sampleRate * 60 / bpm);
  const pulseLength = Math.round(sampleRate * 0.005);
  for (let beat = 0; beat < pcm.length; beat += interval) {
    for (let i = 0; i < pulseLength && beat + i < pcm.length; i++) pcm[beat + i] = (1 - i / pulseLength) * (i === 0 ? 0.95 : 0.7);
  }
  return pcm;
}

export function chordTrack(chords: string[][], seconds = 60): Float32Array {
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

export function vector<T>(values: T[]): NativeVector<T> {
  return {
    size: () => values.length,
    get: (index) => values[index],
    push_back: (value) => { values.push(value); },
    delete: () => {},
  };
}

export function fakeEssentia(
  bpm: number,
  key: string,
  scale: 'major' | 'minor',
  hpcp: number[],
  options: { confidence?: number; percivalBpm?: number; tuning?: number } = {},
): EssentiaApi {
  return {
    module: {
      VectorFloat: class { values: number[] = []; push_back(value: number) { this.values.push(value); } size() { return this.values.length; } get(i: number) { return this.values[i]; } delete() {} },
      VectorVectorFloat: class { rows: NativeVector<number>[] = []; push_back(row: NativeVector<number>) { this.rows.push(row); } size() { return this.rows.length; } get(i: number) { return this.rows[i]; } delete() {} },
      vectorToArray: (value: NativeVector<number>) => Float32Array.from(Array.from({ length: value.size() }, (_, index) => value.get(index))),
      arrayToVector: (values: ArrayLike<number>) => vector(Array.from(values)),
    },
    arrayToVector: (values: ArrayLike<number>) => vector(Array.from(values)),
    FrameGenerator: () => ({ size: () => 4, get: () => vector(new Array(4096).fill(0)), push_back() {}, delete() {} }),
    TuningFrequencyExtractor: () => ({ tuningFrequency: vector([options.tuning ?? 440]) }),
    Windowing: () => ({ frame: vector(new Array(4096).fill(0)) }),
    Spectrum: () => ({ spectrum: vector(new Array(2049).fill(0)) }),
    SpectralPeaks: () => ({ frequencies: vector([440]), magnitudes: vector([1]) }),
    HPCP: () => ({ hpcp: vector(hpcp) }),
    Key: () => ({ key, scale, strength: 0.9 }),
    KeyExtractor: () => ({ key, scale, strength: 0.9 }),
    PercivalBpmEstimator: () => ({ bpm: options.percivalBpm ?? bpm }),
    RhythmExtractor2013: () => ({ bpm, confidence: options.confidence ?? 4.2, ticks: vector([0, 60 / bpm, 120 / bpm, 180 / bpm]), estimates: vector([bpm]), bpmIntervals: vector([60 / bpm]) }),
    BeatTrackerMultiFeature: () => ({ ticks: vector([0, 0.5, 1, 1.5]), confidence: 2 }),
    LogSpectrum: () => ({ logFreqSpectrum: vector(new Array(256).fill(0)), meanTuning: vector([0]), localTuning: 0 }),
    NNLSChroma: () => ({ chromagram: [], bassChromagram: [] }),
    ChordsDetection: () => ({ chords: ['Am'], strength: vector([0.9]) }),
  };
}

// Essentia HPCP36 uses A as bin 0 and three bins per semitone.
export const hpcpFromPitchClasses = (pitchClasses: number[]): number[] => {
  const hpcp = new Array(36).fill(0);
  for (const pitchClass of pitchClasses) hpcp[((pitchClass - 9 + 12) % 12) * 3] = 1;
  return hpcp;
};

export const aMinorHpcp = hpcpFromPitchClasses([9, 0, 4]); // A C E
export const dMajorHpcp = hpcpFromPitchClasses([2, 6, 9]); // D F# A
export const cMajorHpcp = hpcpFromPitchClasses([0, 4, 7]); // C E G

const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
const originalDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');

export function restoreGlobals(): void {
  if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow);
  else Reflect.deleteProperty(globalThis, 'window');
  if (originalDocument) Object.defineProperty(globalThis, 'document', originalDocument);
  else Reflect.deleteProperty(globalThis, 'document');
}

export async function createRealEssentia(): Promise<EssentiaApi> {
  Object.defineProperty(globalThis, 'window', { configurable: true, value: {} });
  Object.defineProperty(globalThis, 'document', { configurable: true, value: { currentScript: null, createElement: () => ({}) } });
  const wasmBinary = await readFile(new URL('../node_modules/essentia.js/dist/essentia-wasm.web.wasm', import.meta.url));
  const wasmModule = await wasmFactory({ wasmBinary, locateFile: (file: string) => file });
  return new EssentiaCore(wasmModule, false) as unknown as EssentiaApi;
}
