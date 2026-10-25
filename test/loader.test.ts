import { afterEach, describe, expect, it, vi } from 'vitest';
import { __resetEssentiaLoaderForTests, loadEssentia } from '../src/essentia-loader.js';

const fakeEssentia = { marker: true } as never;

afterEach(() => {
  __resetEssentiaLoaderForTests();
  vi.useRealTimers();
});

describe('loadEssentia', () => {
  it('shares one concurrent initialization promise', async () => {
    let resolve!: (value: typeof fakeEssentia) => void;
    const factory = vi.fn(() => new Promise<typeof fakeEssentia>((done) => (resolve = done)));
    __resetEssentiaLoaderForTests(factory);

    const first = loadEssentia();
    const second = loadEssentia();
    expect(factory).toHaveBeenCalledTimes(1);
    resolve(fakeEssentia);
    await expect(Promise.all([first, second])).resolves.toEqual([fakeEssentia, fakeEssentia]);
    await expect(loadEssentia()).resolves.toBe(fakeEssentia);
  });

  it('rejects during failure cooldown and retries after it expires', async () => {
    vi.useFakeTimers();
    const factory = vi.fn().mockRejectedValueOnce(new Error('wasm unavailable')).mockResolvedValue(fakeEssentia);
    __resetEssentiaLoaderForTests(factory);

    await expect(loadEssentia()).rejects.toThrow(/No se pudo cargar/);
    await expect(loadEssentia()).rejects.toThrow(/cooling down/);
    expect(factory).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(30_001);
    await expect(loadEssentia()).resolves.toBe(fakeEssentia);
    expect(factory).toHaveBeenCalledTimes(2);
  });
});
