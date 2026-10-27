# K6 — public real-song corpus

K6 checks the real Essentia 0.1.3 + WASM engine against ten real recordings with known key and tempo. This directory contains only **metadata and a builder**; no audio is committed or redistributed.

## Why a public corpus

The original specification asks for ten songs "from your own collection, manually verified". The maintainer authorised using public, citable sources instead. Hooktheory publishes human-curated key, mode, and tempo for each song; Deezer provides a 30-second preview and, in most cases, an independent BPM. Wikipedia and SongBPM are used as cross-checks where they state the same values. Each entry in [`manifest.json`](./manifest.json) records its sources.

The corpus is the **first ten songs in alphabetical order by artist** from a pool of fifteen that met all of these source criteria before any detector run:

1. Hooktheory shows a clear prevailing major or minor key (modal-only songs such as Dorian or Mixolydian were excluded).
2. Deezer has a preview of the original studio recording (no live, remix, cover, or sped-up version).
3. Hooktheory's tempo and Deezer's BPM (or Wikipedia/SongBPM when Deezer reports 0) agree within 1 BPM; conflicting songs were excluded.
4. The page's key annotations are consistent (at most two related keys, resolved by the majority annotation; the relative key is accepted by K6).

The ten selected songs are Adele, Coldplay, Dolly Parton, Eagles, Earth Wind & Fire, Ed Sheeran, Eminem, Fleetwood Mac, Gnarls Barkley, and John Lennon. The alphabetical rule was fixed before measuring; no song was added or removed because of the detector's result.

## Copyright and network use

The builder downloads 30-second Deezer previews at build time and decodes them locally. The MP3 and PCM files are written under `test/k6/generated/`, which is git-ignored and must not be committed. The previews remain subject to Deezer's terms; this corpus is for local acceptance testing, not redistribution. The package's `files` list does not include `test/`.

## Build and run

Requirements: Node.js 20+, `ffmpeg` in `PATH`, and network access to `api.deezer.com` and the preview CDN.

```sh
node test/k6/build-public-corpus.mjs
ACOUSTICALC_K6_CORPUS_MODULE=test/k6/generated/corpus.mjs npm run test:k6
```

The builder writes `corpus.mjs` (the module K6 imports), `audio/*.f32` (mono 44.1 kHz), and the downloaded previews. Point `ACOUSTICALC_K6_OUTPUT` at another directory if needed. Without the environment variable, the default suite skips K6 with an explicit message; it never reports a false pass.

## Acceptance thresholds and current evidence

K6 passes with at least 8/10 exact-or-relative keys and 9/10 tempos (the reported half/double alternative counts). The last measured run with the real engine produced **9/10 keys and 10/10 tempos**. The only key miss was Adele — "Rolling in the Deep": expected C minor, detected G major. The full per-song evidence is printed by the test when it fails; run the command above to reproduce it.
