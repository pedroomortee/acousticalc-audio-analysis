# K6 real-song corpus

The package does not redistribute copyrighted recordings. For local K6 benchmarking, create a private ES module (outside version control) that exports a default array of ten manually verified, mono 44,100 Hz `Float32Array` recordings and their verified key/BPM values. Point `ACOUSTICALC_K6_CORPUS_MODULE` at that module's absolute path before running `npm run test:k6`.

Each item has `{ pcm: Float32Array, key: string, bpm: number }`. `key` uses the English tonic and mode, for example `"A minor"` or `"C major"` (use sharps, not flats); K6 accepts the exact key or its relative. `bpm` is the verified tempo; K6 also accepts the reported double/half alternative. The acceptance threshold is at least 8/10 keys and 9/10 tempos. Keep the file and audio outside version control or in a separately authorized private dataset. This repository's default test skips K6 until the module is supplied; do not fabricate real-song fixtures.
