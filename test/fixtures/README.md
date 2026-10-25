# K6 real-song corpus

The package does not redistribute copyrighted recordings. For local K6 benchmarking, create a private ES module (outside version control) that exports a default array of ten manually verified, mono 44,100 Hz `Float32Array` recordings and their verified key/BPM values. Point `ACOUSTICALC_K6_CORPUS_MODULE` at that module's absolute path before running `npm run test:k6`.

Each item has `{ pcm: Float32Array, key: string, bpm: number }`. Keep the file and audio outside version control or in a separately authorized private dataset. This repository's default test skips K6 until the module is supplied; do not fabricate real-song fixtures.
