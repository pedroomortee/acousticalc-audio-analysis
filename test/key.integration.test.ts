import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { analyzePcm } from '../src/analysis.js';
import type { EssentiaApi } from '../src/essentia-types.js';
import { chordTrack, createRealEssentia, restoreGlobals } from './helpers.js';

let realEssentia: EssentiaApi;

beforeAll(async () => {
  realEssentia = await createRealEssentia();
});

afterAll(() => {
  restoreGlobals();
});

describe('K4–K5 key detection with Essentia 0.1.3 and WASM', () => {
  it('K4 integration: Essentia 0.1.3 detects Am / 8A in the Am–F–C–G progression', async () => {
    const pcm = chordTrack([['A', 'C', 'E'], ['F', 'A', 'C'], ['C', 'E', 'G'], ['G', 'B', 'D']]);
    const result = await analyzePcm(realEssentia, pcm, { withChords: false });
    expect(result.key.nameEn).toBe('A minor');
    expect(result.key.camelot).toBe('8A');
    expect(result.key.alternatives.some((item) => item.nameEn === 'C major')).toBe(true);
  }, 60_000);

  it('K5 integration: Essentia 0.1.3 identifies the synthetic D-major I–IV–V–I as D major / 10B', async () => {
    const pcm = chordTrack([['D', 'F#', 'A'], ['G', 'B', 'D'], ['A', 'C#', 'E'], ['D', 'F#', 'A']], 12);
    const result = await analyzePcm(realEssentia, pcm, { withChords: false });
    expect(result.key.nameEn).toBe('D major');
    expect(result.key.camelot).toBe('10B');
  });
});
