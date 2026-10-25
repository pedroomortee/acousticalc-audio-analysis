import { cp, mkdir, rm } from 'node:fs/promises';
import { build } from 'esbuild';

const dist = new URL('./dist/', import.meta.url);
await rm(dist, { recursive: true, force: true });
await mkdir(new URL('./dist/essentia/', import.meta.url), { recursive: true });

await build({
  entryPoints: ['src/worker.ts'],
  outfile: 'dist/acousticalc-audio-analysis.worker.js',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: ['es2022'],
  sourcemap: false,
  legalComments: 'none',
});

await cp(
  new URL('./node_modules/essentia.js/dist/essentia-wasm.web.wasm', import.meta.url),
  new URL('./dist/essentia/engine.bin', import.meta.url),
);
