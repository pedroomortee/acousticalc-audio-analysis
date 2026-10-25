export interface NativeVector<T = number> {
  size(): number;
  get(index: number): T;
  push_back(value: T): void;
  delete(): void;
}

export interface NativeMatrix extends NativeVector<NativeVector<number>> {}

export interface AlgorithmResult {
  [key: string]: unknown;
}

export interface EssentiaApi {
  module: {
    VectorFloat: new () => NativeVector<number>;
    VectorVectorFloat: new () => NativeMatrix;
    vectorToArray(vector: NativeVector<number>): Float32Array;
    arrayToVector(values: ArrayLike<number>): NativeVector<number>;
  };
  arrayToVector(values: ArrayLike<number>): NativeVector<number>;
  FrameGenerator(input: Float32Array, frameSize?: number, hopSize?: number): NativeMatrix;
  Windowing(frame: NativeVector<number>, normalized?: boolean, size?: number, type?: string, zeroPadding?: number, zeroPhase?: boolean): AlgorithmResult;
  TuningFrequencyExtractor(input: NativeVector<number>, frameSize?: number, hopSize?: number): AlgorithmResult;
  Spectrum(frame: NativeVector<number>, size?: number): AlgorithmResult;
  SpectralPeaks(spectrum: NativeVector<number>, magnitudeThreshold?: number, maxFrequency?: number, maxPeaks?: number, minFrequency?: number, orderBy?: string, sampleRate?: number): AlgorithmResult;
  HPCP(frequencies: NativeVector<number>, magnitudes: NativeVector<number>, bandPreset?: boolean, bandSplitFrequency?: number, harmonics?: number, maxFrequency?: number, maxShifted?: boolean, minFrequency?: number, nonLinear?: boolean, normalized?: string, referenceFrequency?: number, sampleRate?: number, size?: number, weightType?: string, windowSize?: number): AlgorithmResult;
  Key(pcp: NativeVector<number>, numHarmonics?: number, pcpSize?: number, profileType?: string, slope?: number, useMajMin?: boolean, usePolyphony?: boolean, useThreeChords?: boolean): AlgorithmResult;
  KeyExtractor(audio: NativeVector<number>, averageDetuningCorrection?: boolean, frameSize?: number, hopSize?: number, hpcpSize?: number, maxFrequency?: number, maximumSpectralPeaks?: number, minFrequency?: number, pcpThreshold?: number, profileType?: string, sampleRate?: number, spectralPeaksThreshold?: number, tuningFrequency?: number, weightType?: string, windowType?: string): AlgorithmResult;
  PercivalBpmEstimator(signal: NativeVector<number>, frameSize?: number, frameSizeOSS?: number, hopSize?: number, hopSizeOSS?: number, maxBPM?: number, minBPM?: number, sampleRate?: number): AlgorithmResult;
  RhythmExtractor2013(signal: NativeVector<number>, maxTempo?: number, method?: string, minTempo?: number): AlgorithmResult;
  BeatTrackerMultiFeature(signal: NativeVector<number>, maxTempo?: number, minTempo?: number): AlgorithmResult;
  LogSpectrum(spectrum: NativeVector<number>, binsPerSemitone?: number, frameSize?: number, rollOn?: number, sampleRate?: number): AlgorithmResult;
  NNLSChroma(logSpectrogram: NativeMatrix, meanTuning: NativeVector<number>, localTuning: NativeVector<number>, chromaNormalization?: string, frameSize?: number, sampleRate?: number, spectralShape?: number, spectralWhitening?: number, tuningMode?: string, useNNLS?: boolean): AlgorithmResult;
  ChordsDetection(pcp: NativeMatrix, hopSize?: number, sampleRate?: number, windowSize?: number): AlgorithmResult;
}
