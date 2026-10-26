import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { analyzePcm } from '../src/analysis.js';
import type { EssentiaApi } from '../src/essentia-types.js';
import { createRealEssentia, restoreGlobals, syntheticClicks } from './helpers.js';

let realEssentia: EssentiaApi;

beforeAll(async () => {
  realEssentia = await createRealEssentia();
});

afterAll(() => {
  restoreGlobals();
});

describe('K1–K3 with Essentia 0.1.3 and WASM', () => {
  it('K1: Essentia 0.1.3 estimates a 128 BPM kick pattern within 1 BPM', async () => {
    const result = await analyzePcm(realEssentia, syntheticClicks(128), { withChords: false });
    expect(result.bpm.bpm).toBeCloseTo(128, 0);
  }, 60_000);

  it('K2: Essentia 0.1.3 preserves a 174 BPM kick pattern instead of returning 87 BPM', async () => {
    const result = await analyzePcm(realEssentia, syntheticClicks(174), { withChords: false });
    expect(result.bpm.bpm).toBeCloseTo(174, 0);
  }, 60_000);

  it('K3: Essentia 0.1.3 estimates a 90 BPM kick pattern within 1 BPM', async () => {
    const result = await analyzePcm(realEssentia, syntheticClicks(90), { withChords: false });
    expect(result.bpm.bpm).toBeCloseTo(90, 0);
  }, 60_000);
});
