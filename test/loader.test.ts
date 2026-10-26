import { afterEach, describe, expect, it, vi } from 'vitest';
import { readFile } from 'node:fs/promises';
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

  it('loads the real WASM in a worker-like environment with only the shims', async () => {
    const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
    const originalDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
    const originalFetch = globalThis.fetch;
    Reflect.deleteProperty(globalThis, 'window');
    Reflect.deleteProperty(globalThis, 'document');
    const wasm = await readFile(new URL('../node_modules/essentia.js/dist/essentia-wasm.web.wasm', import.meta.url));
    globalThis.fetch = async () => new Response(wasm, { status: 200, headers: { 'content-type': 'application/octet-stream' } });
    __resetEssentiaLoaderForTests();
    try {
      const first = await loadEssentia();
      expect(first).toBeTruthy();
      await expect(loadEssentia()).resolves.toBe(first);
      expect(globalThis.window).toBeDefined();
      expect(globalThis.document).toBeDefined();
    } finally {
      globalThis.fetch = originalFetch;
      if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow);
      else Reflect.deleteProperty(globalThis, 'window');
      if (originalDocument) Object.defineProperty(globalThis, 'document', originalDocument);
      else Reflect.deleteProperty(globalThis, 'document');
      __resetEssentiaLoaderForTests();
    }
  }, 30_000);

  it('rejects during failure cooldown and retries after it expires', async () => {
    vi.useFakeTimers();
    const factory = vi.fn().mockRejectedValueOnce(new Error('wasm unavailable')).mockResolvedValue(fakeEssentia);
    __resetEssentiaLoaderForTests(factory);

    await expect(loadEssentia()).rejects.toThrow(/No se pudo cargar/);
    await expect(loadEssentia()).rejects.toThrow(/espera/i);
    expect(factory).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(30_001);
    await expect(loadEssentia()).resolves.toBe(fakeEssentia);
    expect(factory).toHaveBeenCalledTimes(2);
  });
});
