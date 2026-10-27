import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { analyzePcm, selectAnalysisWindow } from '../src/analysis.js';
import { __resetEssentiaLoaderForTests } from '../src/essentia-loader.js';
import { handleAnalyzeMessage } from '../src/worker.js';
import type { EssentiaApi } from '../src/essentia-types.js';
import {
  aMinorHpcp,
  cMajorHpcp,
  chordTrack,
  createRealEssentia,
  dMajorHpcp,
  fakeEssentia,
  restoreGlobals,
  sampleRate,
  syntheticClicks,
  vector,
} from './helpers.js';

const k6CorpusModule = process.env.ACOUSTICALC_K6_CORPUS_MODULE;
const PITCHES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
let realEssentia: EssentiaApi;

beforeAll(async () => {
  realEssentia = await createRealEssentia();
});

afterAll(() => {
  __resetEssentiaLoaderForTests();
  restoreGlobals();
});

describe('K1–K8 acceptance criteria', () => {
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

  it('K5: the I–IV–V–I fixture has D major as its harmonic root and 10B Camelot key', async () => {
    const pcm = chordTrack([['D', 'F#', 'A'], ['G', 'B', 'D'], ['A', 'C#', 'E'], ['D', 'F#', 'A']], 4);
    const result = await analyzePcm(fakeEssentia(120, 'D', 'major', dMajorHpcp), pcm, { withChords: false });
    expect(result.key.camelot).toBe('10B');
  });

  it.skipIf(!k6CorpusModule)(
    `K6: supports ten real songs with cited key/BPM annotations (public corpus or maintainer collection)${k6CorpusModule ? '' : ' [PENDIENTE POR DATO: ejecuta "node test/k6/build-public-corpus.mjs" y define ACOUSTICALC_K6_CORPUS_MODULE=test/k6/generated/corpus.mjs]'}`,
    async () => {
      const corpusModule = await import(/* @vite-ignore */ pathToFileURL(resolve(k6CorpusModule!)).href);
      const realCorpus = corpusModule.default as Array<{ pcm: Float32Array; key: string; bpm: number }>;
      expect(realCorpus).toHaveLength(10);
      let keyMatches = 0;
      let bpmMatches = 0;
      const details: string[] = [];
      for (const track of realCorpus) {
        expect(track.pcm).toBeInstanceOf(Float32Array);
        expect(track.key).toMatch(/^[A-G]#? (major|minor)$/);
        expect(track.bpm).toBeGreaterThan(0);
        const result = await analyzePcm(realEssentia, track.pcm, { withChords: false });
        const detectedKey = `${result.key.tonic} ${result.key.mode}`;
        const [tonic, mode] = track.key.split(' ') as [string, 'major' | 'minor'];
        const relativeTonic = PITCHES[(PITCHES.indexOf(tonic) + (mode === 'major' ? 9 : 3)) % 12];
        const relativeKey = `${relativeTonic} ${mode === 'major' ? 'minor' : 'major'}`;
        const keyMatch = detectedKey === track.key || detectedKey === relativeKey;
        const bpmMatch = Math.abs(result.bpm.bpm - track.bpm) <= 1
          || Math.abs(result.bpm.alternateBpm - track.bpm) <= 1;
        if (keyMatch) keyMatches++;
        if (bpmMatch) bpmMatches++;
        details.push(`${track.key}/${track.bpm}: detected ${detectedKey}/${result.bpm.bpm.toFixed(1)} (key=${keyMatch}, bpm=${bpmMatch})`);
      }
      console.log(`K6: ${keyMatches}/10 keys, ${bpmMatches}/10 BPM\n${details.join('\n')}`);
      expect(keyMatches, details.join('\n')).toBeGreaterThanOrEqual(8);
      expect(bpmMatches, details.join('\n')).toBeGreaterThanOrEqual(9);
    },
    120_000,
  );

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
      { type: 'analyze', pcm: new Float32Array(30 * sampleRate), sampleRate, withChords: false },
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

  it('K8: reports the centered window and the complete analysis in the public result', async () => {
    const pcm = new Float32Array(600 * sampleRate).fill(0.1);
    const centered = await analyzePcm(fakeEssentia(120, 'A', 'minor', aMinorHpcp), pcm, { withChords: false });
    expect(centered.duration.inputSeconds).toBe(600);
    expect(centered.duration.analyzedSeconds).toBe(60);
    expect(centered.duration.startSeconds).toBe(270);
    expect(centered.duration.usedFullAudio).toBe(false);
    expect(centered.duration.notice).toContain('60 s centrales');

    const complete = await analyzePcm(fakeEssentia(120, 'A', 'minor', aMinorHpcp), pcm, { full: true, withChords: false });
    expect(complete.duration.inputSeconds).toBe(600);
    expect(complete.duration.analyzedSeconds).toBe(600);
    expect(complete.duration.startSeconds).toBe(0);
    expect(complete.duration.usedFullAudio).toBe(true);
    expect(complete.duration.notice).toBeUndefined();
  });
});
