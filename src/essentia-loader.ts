import type { EssentiaApi } from './essentia-types.js';
import wasmFactory from 'essentia.js/dist/essentia-wasm.web.js';
import EssentiaCore from 'essentia.js/dist/essentia.js-core.es.js';

const FAILURE_COOLDOWN_MS = 30_000;
let instance: EssentiaApi | null = null;
let loading: Promise<EssentiaApi> | null = null;
let lastFailure = 0;
let factoryOverride: (() => Promise<EssentiaApi>) | null = null;

async function createEssentia(): Promise<EssentiaApi> {
  if (typeof document === 'undefined') {
    Object.defineProperty(globalThis, 'document', {
      configurable: true,
      value: { currentScript: null, createElement: () => ({}) },
    });
  }

  const url = new URL('./essentia/engine.bin', import.meta.url);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Essentia WASM request failed (${response.status})`);
  const wasmBinary = await response.arrayBuffer();
  const wasmModule = await wasmFactory({ wasmBinary, locateFile: (file: string) => file });
  return new EssentiaCore(wasmModule, false) as unknown as EssentiaApi;
}

export function loadEssentia(): Promise<EssentiaApi> {
  if (instance) return Promise.resolve(instance);
  if (loading) return loading;
  if (lastFailure && Date.now() - lastFailure < FAILURE_COOLDOWN_MS) {
    return Promise.reject(new Error('Essentia.js initialization is cooling down after a previous failure.'));
  }

  const attempt = (factoryOverride ?? createEssentia)();
  loading = attempt.then(
    (loaded) => {
      instance = loaded;
      lastFailure = 0;
      return loaded;
    },
    (error: unknown) => {
      lastFailure = Date.now();
      throw new Error(
        'No se pudo cargar el motor de análisis. Comprueba que essentia/engine.bin se sirve correctamente y vuelve a intentarlo más tarde.',
        { cause: error },
      );
    },
  ).finally(() => {
    loading = null;
  });
  return loading;
}

/** Test seam for exercising loader concurrency and recovery without downloading WASM. */
export function __resetEssentiaLoaderForTests(
  factory?: () => Promise<EssentiaApi>,
  failedAt = 0,
): void {
  instance = null;
  loading = null;
  lastFailure = failedAt;
  factoryOverride = factory ?? null;
}
