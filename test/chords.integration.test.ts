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

describe('K4 chord spans with Essentia 0.1.3 and WASM', () => {
  it('K4 integration: Essentia 0.1.3 detects the Am–F–C–G chord spans in the synthetic progression', async () => {
    const pcm = chordTrack([['A', 'C', 'E'], ['F', 'A', 'C'], ['C', 'E', 'G'], ['G', 'B', 'D']]);
    const result = await analyzePcm(realEssentia, pcm);
    const spans = result.chords?.spans ?? [];
    expect(spans.map((span) => span.chord)).toEqual(['Am', 'F', 'C', 'G']);
    expect(result.chords?.confidence).toBeGreaterThan(0.8);
    expect(spans[0]?.start).toBe(0);
    expect(spans.at(-1)?.end).toBeCloseTo(60, 3);
    for (let index = 0; index < spans.length; index++) {
      expect(spans[index].end).toBeGreaterThan(spans[index].start);
      expect(spans[index].startBeat).toBeTypeOf('number');
      expect(spans[index].endBeat).toBeTypeOf('number');
      if (index > 0) expect(spans[index].start).toBeCloseTo(spans[index - 1].end, 6);
    }
  }, 120_000);
});
