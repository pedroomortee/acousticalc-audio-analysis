# K6 real-song corpus

K6 needs ten real recordings with verified key and tempo. The package does not redistribute copyrighted audio.

## Public corpus (recommended)

[`test/k6/`](../k6/README.md) contains a cited manifest of ten songs, the selection rules, and a builder that downloads Deezer's 30-second previews and decodes them locally. The generated audio and `corpus.mjs` stay under `test/k6/generated/`, which is git-ignored.

```sh
node test/k6/build-public-corpus.mjs
ACOUSTICALC_K6_CORPUS_MODULE=test/k6/generated/corpus.mjs npm run test:k6
```

## Private corpus

Create a private ES module (outside version control) that exports a default array of ten mono 44,100 Hz `Float32Array` recordings and their verified key/BPM values. Point `ACOUSTICALC_K6_CORPUS_MODULE` at that module's absolute path before running `npm run test:k6`.

Each item has `{ pcm: Float32Array, key: string, bpm: number }`. `key` uses the English tonic and mode, for example `"A minor"` or `"C major"` (use sharps, not flats); K6 accepts the exact key or its relative. `bpm` is the verified tempo; K6 also accepts the reported double/half alternative. The acceptance threshold is at least 8/10 keys and 9/10 tempos. Keep the module and audio outside version control or in a separately authorised private dataset. The default test skips K6 until a corpus is supplied; do not fabricate real-song fixtures.
