import { analyzePcm } from './analysis.js';
import { loadEssentia } from './essentia-loader.js';
import type { AnalyzeRequest, WorkerResponse } from './types.js';

interface WorkerScope {
  onmessage: ((event: MessageEvent<unknown>) => void) | null;
  postMessage(message: WorkerResponse): void;
}

const workerScope = globalThis as unknown as WorkerScope;
const isWorker = typeof workerScope.postMessage === 'function' && typeof document === 'undefined';

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message.trim()) return error.message;
  return 'El motor de análisis no pudo procesar el audio. Comprueba que la señal no esté dañada.';
}

export function assertJsonSafe(value: unknown, path = 'result', seen = new Set<object>()): void {
  if (value === null) return;
  const type = typeof value;
  if (type === 'number') {
    if (!Number.isFinite(value)) throw new Error(`El análisis produjo un valor no finito en ${path}.`);
    return;
  }
  if (type === 'string' || type === 'boolean') return;
  if (type !== 'object') throw new Error(`El análisis produjo un valor no serializable en ${path}.`);
  const object = value as Record<string, unknown>;
  if (seen.has(object)) throw new Error(`El análisis produjo una estructura cíclica en ${path}.`);
  seen.add(object);
  if (Array.isArray(object)) {
    object.forEach((item, index) => assertJsonSafe(item, `${path}[${index}]`, seen));
  } else {
    for (const [key, item] of Object.entries(object)) assertJsonSafe(item, `${path}.${key}`, seen);
  }
  seen.delete(object);
}

export async function handleAnalyzeMessage(message: unknown, post: (response: WorkerResponse) => void): Promise<void> {
  if (!message || typeof message !== 'object' || !('type' in message) || message.type !== 'analyze') {
    post({ type: 'error', error: 'Solicitud no válida: se esperaba type="analyze".' });
    return;
  }
  const request = message as AnalyzeRequest;
  if (!(request.pcm instanceof Float32Array)) {
    post({ type: 'error', error: 'El audio debe enviarse como Float32Array mono.' });
    return;
  }
  if (request.sampleRate !== 44_100) {
    post({ type: 'error', error: 'La frecuencia de muestreo debe ser exactamente 44100 Hz.' });
    return;
  }
  try {
    post({ type: 'progress', stage: 'loading', message: 'Cargando motor de análisis…', progress: 0 });
    const essentia = await loadEssentia();
    const result = await analyzePcm(essentia, request.pcm, request, (event) => {
      post({ type: 'progress', ...event });
    });
    assertJsonSafe(result);
    post({ type: 'success', result: JSON.parse(JSON.stringify(result)) as typeof result });
  } catch (error) {
    post({ type: 'error', error: errorMessage(error) });
  }
}

if (isWorker) {
  workerScope.onmessage = (event) => {
    void handleAnalyzeMessage(event.data, (response) => workerScope.postMessage(response));
  };
}
