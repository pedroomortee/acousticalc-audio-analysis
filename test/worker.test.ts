import { describe, expect, it, vi } from 'vitest';
import { handleAnalyzeMessage } from '../src/worker.js';
import { __resetEssentiaLoaderForTests } from '../src/essentia-loader.js';
import type { EssentiaApi } from '../src/essentia-types.js';

const vector = (values: number[]) => ({ size: () => values.length, get: (index: number) => values[index], push_back: vi.fn(), delete: vi.fn() });
const fakeEssentia = {
  module: { VectorFloat: class {}, VectorVectorFloat: class {}, vectorToArray: (v: ReturnType<typeof vector>) => Float32Array.from(Array.from({ length: v.size() }, (_, i) => v.get(i))) },
  arrayToVector: (values: ArrayLike<number>) => vector(Array.from(values)),
  FrameGenerator: () => ({ size: () => 0, delete: vi.fn() }),
  TuningFrequencyExtractor: () => ({ tuningFrequency: vector([440]) }),
} as unknown as EssentiaApi;

describe('worker protocol', () => {
  it('returns a JSON-compatible error for an invalid request', async () => {
    const post = vi.fn();
    await handleAnalyzeMessage({ type: 'wrong' }, post);
    expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'error' }));
    expect(JSON.stringify(post.mock.calls[0][0])).not.toContain('NaN');
  });

  it('requires a 44.1 kHz sample rate', async () => {
    const post = vi.fn();
    await handleAnalyzeMessage({ type: 'analyze', pcm: new Float32Array(44_100), sampleRate: 48000 }, post);
    expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'error', error: expect.stringMatching(/44100/) }));
  });

  it('emits loading progress then a silence error without invented key or BPM values', async () => {
    __resetEssentiaLoaderForTests(async () => fakeEssentia);
    const post = vi.fn();
    await handleAnalyzeMessage({ type: 'analyze', pcm: new Float32Array(88_200), sampleRate: 44_100, withChords: false }, post);
    expect(post.mock.calls.map(([response]) => response.type)).toEqual(['progress', 'progress', 'error']);
    expect(post.mock.calls.at(-1)?.[0]).not.toHaveProperty('result');
  });
});
