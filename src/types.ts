export interface AnalyzeRequest {
  type: 'analyze';
  pcm: Float32Array;
  sampleRate: 44100;
  /** Analyze the entire input instead of the default centered 60-second window. */
  full?: boolean;
  /** Include chord segmentation (enabled by default). */
  withChords?: boolean;
}

export interface ProgressResponse {
  type: 'progress';
  stage: 'loading' | 'key' | 'bpm' | 'chords';
  message: string;
  progress: number;
}

export interface KeyAlternative {
  tonic: string;
  mode: 'major' | 'minor';
  nameEs: string;
  nameEn: string;
  camelot: string;
  weight: number;
}

export interface KeyResult extends KeyAlternative {
  confidence: number;
  confidenceLabel: 'Alta' | 'Media' | 'Baja';
  correction?: 'relative-correction' | 'parallel-correction' | 'dominant-correction' | 'subdominant-correction';
  alternatives: KeyAlternative[];
}

export interface BpmResult {
  bpm: number;
  rounded: number;
  confidence: number;
  confidenceLabel: 'muy baja' | 'baja' | 'buena' | 'excelente';
  estimatorsAgree: boolean;
  alternateBpm: number;
  ticks: number[];
}

export interface ChordSpan {
  chord: string;
  start: number;
  end: number;
  strength: number;
  startBeat?: number;
  endBeat?: number;
}

export interface ChordResult {
  spans: ChordSpan[];
  confidence: number;
  clarity: number;
  tonal: boolean;
  warning?: string;
  diatonicRatio: number;
}

export interface AnalysisResult {
  key: KeyResult;
  bpm: BpmResult;
  tuning: {
    referenceFrequency: number;
    centsFrom440: number;
  };
  chords?: ChordResult;
  duration: {
    inputSeconds: number;
    analyzedSeconds: number;
    startSeconds: number;
    usedFullAudio: boolean;
    notice?: string;
  };
}

export interface SuccessResponse {
  type: 'success';
  result: AnalysisResult;
}

export interface ErrorResponse {
  type: 'error';
  error: string;
}

export type WorkerResponse = ProgressResponse | SuccessResponse | ErrorResponse;
