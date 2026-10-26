# acousticalc-audio-analysis

Web Worker de análisis musical con Essentia.js (WASM): detecta tonalidad, tempo y acordes en audio mono `Float32Array` a 44,1 kHz. El análisis ocurre dentro del Worker; este paquete no incluye interfaz, decodificador de archivos ni subida de audio.

## Instalación

```sh
npm install acousticalc-audio-analysis
```

La versión actual contiene el worker en `dist/acousticalc-audio-analysis.worker.js` y el motor estático en `dist/essentia/engine.bin`. Copia **ambos** a una ubicación estática de tu servidor conservando la ruta `essentia/engine.bin` relativa al worker. El host debe servir el binario con un tipo MIME de datos binarios (`application/octet-stream` es suficiente) y permitir que el worker haga `fetch` de ese mismo origen.

## Uso del Worker

```ts
const worker = new Worker('/audio/acousticalc-audio-analysis.worker.js', { type: 'module' });

worker.onmessage = ({ data }) => {
  if (data.type === 'progress') console.log(data.progress, data.message);
  if (data.type === 'success') console.log(data.result.key, data.result.bpm, data.result.chords);
  if (data.type === 'error') console.error(data.error);
};

const pcm = new Float32Array(/* audio mono a 44 100 Hz */);
worker.postMessage({ type: 'analyze', pcm, sampleRate: 44100 }, [pcm.buffer]);
```

El protocolo recibe `{ type: 'analyze', pcm: Float32Array, sampleRate: 44100 }`. Para audios de más de 60 segundos, por defecto analiza los 60 segundos centrales e incluye un aviso; para analizar todo el audio añade `full: true`. Los acordes se analizan por defecto; añade `withChords: false` para omitirlos. Las respuestas son `progress`, `success` con resultados JSON o `error`; si Essentia no puede determinar tonalidad o BPM, el Worker devuelve un error en lugar de inventar un valor. Si el audio está completamente en silencio (todas las muestras a cero), el Worker devuelve un `error` claro antes de invocar a Essentia, sin estimar tonalidad ni BPM.

Las exportaciones TypeScript de `src/types.ts` definen `AnalyzeRequest`, `WorkerResponse`, `AnalysisResult`, `KeyResult`, `BpmResult` y `ChordResult`.

## Compilación y pruebas

Requiere Node.js 20 o posterior y npm.

```sh
npm install
npm run typecheck
npm test
npm run build
```

La suite incluye K1–K5 y K7–K8 con señales sintéticas. K6 requiere diez canciones con tonalidad y tempo verificados manualmente, que no se redistribuyen en este paquete. Consulta [`test/fixtures/README.md`](./test/fixtures/README.md) para ejecutar esa validación con una colección local.

El build genera:

```text
dist/
├── acousticalc-audio-analysis.worker.js
└── essentia/
    └── engine.bin
```

El binario se toma de `essentia.js@0.1.3` (`essentia-wasm.web.wasm`) y se publica con el nombre `engine.bin` para servirlo como archivo estático.

## Licencia

Este paquete se distribuye bajo **GNU Affero General Public License v3.0 o posterior (AGPL-3.0-or-later)**; consulta [`LICENSE`](./LICENSE). Incluye Essentia.js 0.1.3, también licenciada bajo AGPL-3.0. La fuente correspondiente al worker y los recursos build incluidos en el paquete se distribuyen en este repositorio.
