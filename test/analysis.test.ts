import { describe, expect, it, vi } from 'vitest';
import { analyzePcm, selectAnalysisWindow } from '../src/analysis.js';
import type { EssentiaApi } from '../src/essentia-types.js';
import { aMinorHpcp, fakeEssentia } from './helpers.js';

const SR = 44_100;

describe('analysis input and windows', () => {
  it('selects the centered 60 seconds of a ten-minute track by default', () => {
    const pcm = new Float32Array(SR * 600);
    pcm[SR * 270] = 0.7;
    const selected = selectAnalysisWindow(pcm);
    expect(selected.pcm.length).toBe(SR * 60);
    expect(selected.startSeconds).toBe(270);
    expect(selected.notice).toMatch(/60 s centrales/);
    expect(selected.pcm[0]).toBeCloseTo(0.7);
  });

  it('keeps audio up to 90 seconds complete and trims only above that threshold', () => {
    const seventyFive = new Float32Array(SR * 75);
    seventyFive[0] = 0.5;
    const complete = selectAnalysisWindow(seventyFive);
    expect(complete.pcm).toBe(seventyFive);
    expect(complete.startSeconds).toBe(0);
    expect(complete.notice).toBeUndefined();

    const ninetyOne = new Float32Array(SR * 91);
    const trimmed = selectAnalysisWindow(ninetyOne);
    expect(trimmed.pcm.length).toBe(SR * 60);
    expect(trimmed.startSeconds).toBe(15.5);
    expect(trimmed.notice).toMatch(/60 s centrales/);
  });

  it('keeps all samples when full analysis is requested', () => {
    const pcm = new Float32Array(SR * 600);
    const selected = selectAnalysisWindow(pcm, true);
    expect(selected.pcm).toBe(pcm);
    expect(selected.startSeconds).toBe(0);
    expect(selected.usedFullAudio).toBe(true);
  });

  it('rejects non-finite PCM before touching Essentia', async () => {
    const pcm = new Float32Array(SR).fill(0);
    pcm[20] = Number.NaN;
    await expect(analyzePcm({} as EssentiaApi, pcm)).rejects.toThrow(/muestras no finitas/);
  });

  it('rejects digital silence before touching Essentia', async () => {
    const arrayToVector = vi.fn();
    await expect(analyzePcm({ arrayToVector } as unknown as EssentiaApi, new Float32Array(SR * 2)))
      .rejects.toThrow(/silencio/i);
    expect(arrayToVector).not.toHaveBeenCalled();
  });

  it('accepts tuning between 420 and 460 Hz and falls back to 440 Hz outside that range', async () => {
    const pcm = new Float32Array(SR).fill(0.1);
    const inRange = await analyzePcm(
      fakeEssentia(120, 'A', 'minor', aMinorHpcp, { tuning: 430 }),
      pcm,
      { withChords: false },
    );
    expect(inRange.tuning.referenceFrequency).toBe(430);

    const outOfRange = await analyzePcm(
      fakeEssentia(120, 'A', 'minor', aMinorHpcp, { tuning: 470 }),
      pcm,
      { withChords: false },
    );
    expect(outOfRange.tuning.referenceFrequency).toBe(440);
  });

  it('maps RhythmExtractor2013 confidence to 0–1 and labels it on the Essentia scale', async () => {
    const result = await analyzePcm(
      fakeEssentia(130, 'A', 'minor', aMinorHpcp, { confidence: 2.5, percivalBpm: 100 }),
      new Float32Array(SR).fill(0.1),
      { withChords: false },
    );
    expect(result.bpm.confidence).toBeCloseTo(2.5 / 5.32, 6);
    expect(result.bpm.confidenceLabel).toBe('buena');
    expect(result.bpm.estimatorsAgree).toBe(false);
  });

  it('emits progress messages for key, BPM, and chords on a successful analysis', async () => {
    const pcm = new Float32Array(SR * 2).fill(0.1);
    const vector = (values: number[]) => ({
      size: () => values.length,
      get: (index: number) => values[index],
      delete: vi.fn(),
    });
    const hpcp = new Array(36).fill(0);
    for (const index of [0, 9, 21]) hpcp[index] = 1;
    const essentia = {
      module: { vectorToArray: (value: ReturnType<typeof vector>) => Float32Array.from(Array.from({ length: value.size() }, (_, i) => value.get(i))) },
      arrayToVector: (values: ArrayLike<number>) => vector(Array.from(values)),
      TuningFrequencyExtractor: () => ({ tuningFrequency: vector([440]) }),
      FrameGenerator: () => ({ size: () => 4, get: () => vector(new Array(4096).fill(0)), delete: vi.fn() }),
      Windowing: () => ({ frame: vector(new Array(4096).fill(0)) }),
      Spectrum: () => ({ spectrum: vector(new Array(2049).fill(0)) }),
      SpectralPeaks: () => ({ frequencies: vector([440]), magnitudes: vector([1]) }),
      HPCP: () => ({ hpcp: vector(hpcp) }),
      Key: () => ({ key: 'C', scale: 'major', strength: 0.5 }),
      KeyExtractor: () => ({ key: 'C', scale: 'major', strength: 0.5 }),
      PercivalBpmEstimator: () => ({ bpm: 120 }),
      RhythmExtractor2013: () => ({ bpm: 120, confidence: 2, ticks: vector([0, 0.5, 1, 1.5]) }),
      BeatTrackerMultiFeature: () => ({ ticks: vector([0, 0.5, 1, 1.5]), confidence: vector([2]) }),
      LogSpectrum: () => ({ logFreqSpectrum: vector(new Array(2049).fill(0)), meanTuning: 0, localTuning: 0 }),
      NNLSChroma: () => ({ chroma: vector([]), bassChroma: vector([]) }),
      ChordsDetection: () => ({ chords: ['C'], strength: vector([0.8]) }),
    } as unknown as EssentiaApi;
    // The chord metrics read NNLS matrix rows after ChordsDetection returns.
    let rowDeletes = 0;
    const makeMatrix = (row: number[]) => {
      let deleted = false;
      return {
        size: () => 4,
        get: () => {
          if (deleted) throw new Error('NNLS matrix was disposed before chord metrics were calculated.');
          return { size: () => row.length, get: (index: number) => row[index], push_back: () => {}, delete: vi.fn(() => { rowDeletes++; }) };
        },
        delete: vi.fn(() => { deleted = true; }),
      };
    };
    const chromagram = makeMatrix([1, 0.8, 0.6, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const bassChromagram = makeMatrix(new Array(12).fill(0));
    const tunedLogfreqSpectrum = makeMatrix(new Array(12).fill(0));
    const semitoneSpectrum = makeMatrix(new Array(12).fill(0));
    const essentiaWithRows = Object.assign(essentia, {
      module: {
        vectorToArray: (value: ReturnType<typeof vector>) => Float32Array.from(Array.from({ length: value.size() }, (_, i) => value.get(i))),
        VectorVectorFloat: class { rows: ReturnType<typeof vector>[] = []; push_back(row: ReturnType<typeof vector>) { this.rows.push(row); } size() { return this.rows.length; } get(i: number) { return this.rows[i]; } delete() {} },
      },
      NNLSChroma: () => ({ chromagram, bassChromagram, tunedLogfreqSpectrum, semitoneSpectrum }),
    });
    const progress = vi.fn();
    const result = await analyzePcm(essentiaWithRows, pcm, {}, progress);
    expect(result.bpm.bpm).toBe(120);
    expect(result.chords?.spans).toHaveLength(1);
    expect(chromagram.delete).toHaveBeenCalledOnce();
    expect(bassChromagram.delete).toHaveBeenCalledOnce();
    expect(tunedLogfreqSpectrum.delete).toHaveBeenCalledOnce();
    expect(semitoneSpectrum.delete).toHaveBeenCalledOnce();
    expect(rowDeletes).toBe(8);
    expect(progress.mock.calls.map(([item]) => item.stage)).toEqual(['key', 'bpm', 'chords']);
  });
});
