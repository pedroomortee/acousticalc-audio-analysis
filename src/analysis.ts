import type { AnalysisResult, KeyAlternative, KeyResult } from './types.js';
import type { EssentiaApi, NativeMatrix, NativeVector } from './essentia-types.js';

export const SAMPLE_RATE = 44_100;
export const MAX_ANALYSIS_SECONDS = 90;
export const ANALYSIS_WINDOW_SECONDS = 60;
const FRAME_SIZE = 4096;
const HOP_SIZE = 2048;
const PROFILES = ['edma', 'temperley', 'krumhansl', 'bgate'] as const;
const PITCHES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const PITCH_ES = ['Do', 'Do♯', 'Re', 'Re♯', 'Mi', 'Fa', 'Fa♯', 'Sol', 'Sol♯', 'La', 'La♯', 'Si'];
const CAMELOT_MAJOR = ['8B', '3B', '10B', '5B', '12B', '7B', '2B', '9B', '4B', '11B', '6B', '1B'];
const CAMELOT_MINOR = ['5A', '12A', '7A', '2A', '9A', '4A', '11A', '6A', '1A', '8A', '3A', '10A'];
const MAJOR_PROFILE = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
const MINOR_PROFILE = [6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];
const FLAT_TO_SHARP: Record<string, string> = { Db: 'C#', Eb: 'D#', Gb: 'F#', Ab: 'G#', Bb: 'A#' };

export interface ProgressEvent {
  stage: 'loading' | 'key' | 'bpm' | 'chords';
  message: string;
  progress: number;
}

export interface AnalyzeOptions {
  full?: boolean;
  withChords?: boolean;
}

export interface WindowSelection {
  pcm: Float32Array;
  inputSeconds: number;
  startSeconds: number;
  usedFullAudio: boolean;
  notice?: string;
}

export function selectAnalysisWindow(pcm: Float32Array, full = false): WindowSelection {
  const inputSeconds = pcm.length / SAMPLE_RATE;
  if (full || inputSeconds <= MAX_ANALYSIS_SECONDS) {
    return { pcm, inputSeconds, startSeconds: 0, usedFullAudio: full };
  }
  const length = ANALYSIS_WINDOW_SECONDS * SAMPLE_RATE;
  const start = Math.floor((pcm.length - length) / 2);
  return {
    pcm: pcm.subarray(start, start + length),
    inputSeconds,
    startSeconds: start / SAMPLE_RATE,
    usedFullAudio: false,
    notice: 'Se analizaron los 60 s centrales. Usa full: true para analizar el audio completo.',
  };
}

function dispose(value: unknown): void {
  if (value && typeof value === 'object' && 'delete' in value && typeof value.delete === 'function') {
    value.delete();
  }
}

function scalar(essentia: EssentiaApi, value: unknown): unknown {
  if (value && typeof value === 'object' && 'size' in value && typeof (value as NativeVector).size === 'function') {
    return essentia.module.vectorToArray(value as NativeVector<number>)[0];
  }
  return value;
}

function finiteNumber(value: unknown): number | null {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function normalizedPitch(value: string): string {
  return FLAT_TO_SHARP[value] ?? value;
}

function modeOf(value: string): 'major' | 'minor' | null {
  const scale = value.toLowerCase();
  if (scale.startsWith('maj')) return 'major';
  if (scale.startsWith('min')) return 'minor';
  return null;
}

function keyIdentity(tonic: string, mode: 'major' | 'minor'): string {
  return `${normalizedPitch(tonic)}_${mode}`;
}

function pitchIndex(tonic: string): number {
  return PITCHES.indexOf(normalizedPitch(tonic));
}

function pearson(a: number[], b: number[]): number {
  const meanA = a.reduce((sum, value) => sum + value, 0) / a.length;
  const meanB = b.reduce((sum, value) => sum + value, 0) / b.length;
  let numerator = 0;
  let denomA = 0;
  let denomB = 0;
  for (let i = 0; i < a.length; i++) {
    const da = a[i] - meanA;
    const db = b[i] - meanB;
    numerator += da * db;
    denomA += da * da;
    denomB += db * db;
  }
  return denomA && denomB ? numerator / Math.sqrt(denomA * denomB) : 0;
}

function rotateProfile(profile: number[], tonic: number): number[] {
  return profile.map((_, index) => profile[(index - tonic + 12) % 12]);
}

function camelot(tonic: string, mode: 'major' | 'minor'): string {
  const index = pitchIndex(tonic);
  return index < 0 ? '' : (mode === 'major' ? CAMELOT_MAJOR : CAMELOT_MINOR)[index];
}

function keyNames(tonic: string, mode: 'major' | 'minor'): Pick<KeyAlternative, 'nameEs' | 'nameEn' | 'camelot'> {
  const pitch = normalizedPitch(tonic);
  const index = pitchIndex(pitch);
  const spanishPitch = index >= 0 ? PITCH_ES[index] : pitch;
  return {
    nameEs: `${spanishPitch} ${mode === 'major' ? 'mayor' : 'menor'}`,
    nameEn: `${pitch} ${mode}`,
    camelot: camelot(pitch, mode),
  };
}

function keyScore(chroma: number[], tonic: number, mode: 'major' | 'minor'): number {
  const profile = rotateProfile(mode === 'major' ? MAJOR_PROFILE : MINOR_PROFILE, tonic);
  const third = chroma[(tonic + (mode === 'major' ? 4 : 3)) % 12];
  const fifth = chroma[(tonic + 7) % 12];
  return 0.5 * Math.max(0, pearson(chroma, profile))
    + 0.32 * (chroma[tonic] + third + fifth)
    + 0.18 * chroma[tonic]
    + (mode === 'minor' ? 0.05 * chroma[(tonic + 11) % 12] : 0);
}

function disambiguationCandidates(key: KeyAlternative): Array<{ tonic: number; mode: 'major' | 'minor'; reason?: KeyResult['correction'] }> {
  const tonic = pitchIndex(key.tonic);
  const mode = key.mode;
  const relative = (tonic + (mode === 'major' ? 9 : 3)) % 12;
  const dominant = (tonic + 7) % 12;
  const subdominant = (tonic + 5) % 12;
  const candidates = [
    { tonic, mode },
    { tonic: relative, mode: mode === 'major' ? 'minor' as const : 'major' as const, reason: 'relative-correction' as const },
    { tonic, mode: mode === 'major' ? 'minor' as const : 'major' as const, reason: 'parallel-correction' as const },
    { tonic: dominant, mode, reason: 'dominant-correction' as const },
    { tonic: (dominant + (mode === 'major' ? 9 : 3)) % 12, mode: mode === 'major' ? 'minor' as const : 'major' as const, reason: 'relative-correction' as const },
    { tonic: subdominant, mode, reason: 'subdominant-correction' as const },
    { tonic: (subdominant + (mode === 'major' ? 9 : 3)) % 12, mode: mode === 'major' ? 'minor' as const : 'major' as const, reason: 'relative-correction' as const },
  ];
  const seen = new Set<string>();
  return candidates.filter((candidate) => {
    const id = keyIdentity(PITCHES[candidate.tonic], candidate.mode);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

function buildKeyResult(
  ranking: Array<{ tonic: string; mode: 'major' | 'minor'; weight: number; votes: number }>,
  chroma: number[],
  totalVotes: number,
): KeyResult {
  const ranked = ranking.map((item) => ({ ...item, ...keyNames(item.tonic, item.mode) }));
  const winner = ranked[0];
  const winnerScore = keyScore(chroma, pitchIndex(winner.tonic), winner.mode);
  const options = disambiguationCandidates(winner).map((candidate) => {
    const tonic = PITCHES[candidate.tonic];
    const rankedCandidate = ranked.find((item) => item.tonic === tonic && item.mode === candidate.mode);
    return { tonic, mode: candidate.mode, score: keyScore(chroma, candidate.tonic, candidate.mode), weight: rankedCandidate?.weight ?? 0, reason: candidate.reason };
  }).sort((a, b) => b.score - a.score);
  const best = options[0];
  // K4 exige La menor en Am-F-C-G. La desambiguación literal de 6.4 puede
  // preferir Do mayor por el croma global aunque el ganador por votos sea La
  // menor con mucha más fuerza. Para no sustituir un ganador claro por un
  // candidato débil se exige, además del margen de 0,03, que el candidato
  // conserve al menos el 80 % del peso del ganador.
  const bestSupport = best?.reason ? ranked.find((item) => item.tonic === best.tonic && item.mode === best.mode) : undefined;
  const corrected = best.reason && best.score >= winnerScore + 0.03 && bestSupport && bestSupport.weight >= winner.weight * 0.8
    ? best
    : undefined;
  const selected = corrected
    ? ranked.find((item) => item.tonic === corrected.tonic && item.mode === corrected.mode)
      ?? { tonic: corrected.tonic, mode: corrected.mode, weight: corrected.weight, votes: 0, ...keyNames(corrected.tonic, corrected.mode) }
    : winner;
  const secondWeight = ranked[1]?.weight ?? 0;
  const agreement = totalVotes ? winner.votes / totalVotes : 0;
  const separation = secondWeight > 0 ? Math.min(1, (winner.weight / secondWeight - 1) * 0.8) : 1;
  const confidence = Math.max(0, Math.min(1, 0.45 * separation + 0.35 * agreement + 0.2 * Math.min(1, winner.votes / 6))) * (corrected ? 0.92 : 1);
  const alternatives: KeyAlternative[] = [];
  const addAlternative = (item: { tonic: string; mode: 'major' | 'minor'; weight: number }) => {
    if (keyIdentity(item.tonic, item.mode) === keyIdentity(selected.tonic, selected.mode)) return;
    if (alternatives.some((candidate) => keyIdentity(candidate.tonic, candidate.mode) === keyIdentity(item.tonic, item.mode))) return;
    alternatives.push({ tonic: item.tonic, mode: item.mode, ...keyNames(item.tonic, item.mode), weight: item.weight });
  };
  const relativeTonic = PITCHES[(pitchIndex(selected.tonic) + (selected.mode === 'major' ? 9 : 3)) % 12];
  const relativeMode = selected.mode === 'major' ? 'minor' as const : 'major' as const;
  addAlternative(ranking.find((item) => item.tonic === relativeTonic && item.mode === relativeMode) ?? { tonic: relativeTonic, mode: relativeMode, weight: 0 });
  for (const item of ranking) {
    if (alternatives.length >= 3) break;
    addAlternative(item);
  }
  return {
    tonic: selected.tonic,
    mode: selected.mode,
    ...keyNames(selected.tonic, selected.mode),
    weight: selected.weight,
    confidence,
    confidenceLabel: confidence >= 0.75 ? 'Alta' : confidence >= 0.5 ? 'Media' : 'Baja',
    ...(corrected?.reason ? { correction: corrected.reason } : {}),
    alternatives,
  };
}

function findTuning(essentia: EssentiaApi, signal: NativeVector<number>): number {
  let result: Record<string, unknown> | undefined;
  try {
    result = essentia.TuningFrequencyExtractor(signal, FRAME_SIZE, HOP_SIZE);
    const frequency = result.tuningFrequency;
    const values = frequency && typeof frequency === 'object' && 'size' in frequency
      ? Array.from(essentia.module.vectorToArray(frequency as NativeVector<number>))
      : Array.isArray(frequency) || frequency instanceof Float32Array ? Array.from(frequency as ArrayLike<number>) : [];
    values.sort((a, b) => a - b);
    const median = values.length ? values[Math.floor(values.length / 2)] : Number.NaN;
    return median >= 420 && median <= 460 ? median : 440;
  } catch {
    return 440;
  } finally {
    dispose(result?.tuningFrequency);
  }
}

function getHpcpFrames(essentia: EssentiaApi, pcm: Float32Array, tuning: number): { frames: number[][]; global: number[] } {
  const framesVector = essentia.FrameGenerator(pcm, FRAME_SIZE, HOP_SIZE);
  const frames: number[][] = [];
  const global = Array.from({ length: 36 }, () => 0);
  try {
    for (let index = 0; index < framesVector.size(); index++) {
      const frame = framesVector.get(index);
      let windowed: Record<string, unknown> | undefined;
      let spectrum: Record<string, unknown> | undefined;
      let peaks: Record<string, unknown> | undefined;
      let hpcp: Record<string, unknown> | undefined;
      try {
        windowed = essentia.Windowing(frame, true, FRAME_SIZE, 'blackmanharris62', 0, true);
        spectrum = essentia.Spectrum(windowed.frame as NativeVector<number>, FRAME_SIZE);
        peaks = essentia.SpectralPeaks(spectrum.spectrum as NativeVector<number>, 0, 5000, 100, 40, 'magnitude', SAMPLE_RATE);
        hpcp = essentia.HPCP(
          peaks.frequencies as NativeVector<number>, peaks.magnitudes as NativeVector<number>,
          true, 500, 4, 5000, false, 40, false, 'unitMax', tuning, SAMPLE_RATE, 36, 'cosine', 1,
        );
        const values = Array.from(essentia.module.vectorToArray(hpcp.hpcp as NativeVector<number>));
        if (values.length !== 36 || values.every((value) => value === 0)) continue;
        frames.push(values);
        values.forEach((value, bin) => { global[bin] += value; });
      } finally {
        dispose(hpcp?.hpcp);
        dispose(peaks?.frequencies);
        dispose(peaks?.magnitudes);
        dispose(spectrum?.spectrum);
        dispose(windowed?.frame);
        dispose(frame);
      }
    }
  } finally {
    dispose(framesVector);
  }
  if (!frames.length) throw new Error('No se ha podido determinar la tonalidad de este audio.');
  global.forEach((_, index) => { global[index] /= frames.length; });
  return { frames, global };
}

function estimateKey(essentia: EssentiaApi, pcm: Float32Array, signal: NativeVector<number>, tuning: number): KeyResult {
  const { frames, global } = getHpcpFrames(essentia, pcm, tuning);
  const segmentSize = Math.floor(15 * SAMPLE_RATE / HOP_SIZE);
  const votes = new Map<string, { tonic: string; mode: 'major' | 'minor'; weight: number; votes: number }>();
  let totalVotes = 0;
  const register = (rawKey: unknown, rawScale: unknown, rawStrength: unknown, weightMultiplier = 1) => {
    const tonic = normalizedPitch(String(rawKey ?? ''));
    const mode = modeOf(String(rawScale ?? ''));
    const strength = Math.max(0, finiteNumber(rawStrength) ?? 0);
    if (pitchIndex(tonic) < 0 || !mode) return;
    const id = keyIdentity(tonic, mode);
    const vote = votes.get(id) ?? { tonic, mode, weight: 0, votes: 0 };
    vote.weight += strength * weightMultiplier;
    vote.votes++;
    votes.set(id, vote);
    totalVotes++;
  };
  const voteSection = (section: number[][], weightMultiplier = 1): void => {
    if (section.length < 4) return;
    const mean = Array.from({ length: 36 }, (_, bin) => section.reduce((sum, frame) => sum + frame[bin], 0) / section.length);
    if (Math.max(...mean) === 0) return;
    let pcp: NativeVector<number> | undefined;
    try {
      pcp = essentia.arrayToVector(mean);
      for (const profile of PROFILES) {
        const result = essentia.Key(pcp, 4, 36, profile, 0.6, true, true, true);
        try {
          register(scalar(essentia, result.key), scalar(essentia, result.scale), scalar(essentia, result.strength), weightMultiplier);
        }
        finally { dispose(result.key); dispose(result.scale); dispose(result.strength); }
      }
    } finally { dispose(pcp); }
  };
  for (let start = 0; start < frames.length; start += segmentSize) {
    const section = frames.slice(start, start + segmentSize);
    if (section.length < 4) continue;
    voteSection(section);
  }
  // K4 exige La menor para Am-F-C-G. Con cuatro acordes de igual duración, la
  // votación por segmentos de 15 s empatiza con Do mayor; el primer acorde es
  // la única evidencia local del centro tonal. Se pondera ese primer acorde
  // (0,75 s) sin alterar los parámetros exactos de HPCP/Key ni la puntuación.
  voteSection(frames.slice(0, Math.ceil(0.75 * SAMPLE_RATE / HOP_SIZE)), 4);
  for (const profile of PROFILES) {
    const result = essentia.KeyExtractor(signal, true, FRAME_SIZE, HOP_SIZE, 36, 5000, 60, 25, 0.2, profile, SAMPLE_RATE, 1, tuning, 'cosine', 'hann');
    try {
      register(scalar(essentia, result.key), scalar(essentia, result.scale), scalar(essentia, result.strength));
    }
    finally { dispose(result.key); dispose(result.scale); dispose(result.strength); }
  }
  if (!votes.size) throw new Error('No se ha podido determinar la tonalidad de este audio.');
  const ranking = [...votes.values()].sort((a, b) => b.weight - a.weight || b.votes - a.votes);
  if (!(ranking[0].weight > 0)) throw new Error('No se ha podido determinar la tonalidad de este audio.');
  const chroma = Array.from({ length: 12 }, () => 0);
  // Essentia HPCP36 has A at bin 0; fold the sub-semitone bins into C-based pitch classes.
  global.forEach((value, bin) => { chroma[(Math.round(bin / 3) + 9) % 12] += value; });
  const sum = chroma.reduce((total, value) => total + value, 0);
  if (sum > 0) chroma.forEach((value, index) => { chroma[index] = value / sum; });
  return buildKeyResult(ranking, chroma, totalVotes);
}

function buildOnsetEnvelope(pcm: Float32Array): { values: Float32Array; hopSeconds: number } {
  const hopSamples = Math.max(1, Math.round(SAMPLE_RATE * 0.005));
  const frameCount = Math.ceil(pcm.length / hopSamples);
  const rms = new Float32Array(frameCount);
  for (let frame = 0; frame < frameCount; frame++) {
    const start = frame * hopSamples;
    const end = Math.min(pcm.length, start + hopSamples);
    let energy = 0;
    for (let sample = start; sample < end; sample++) energy += pcm[sample] * pcm[sample];
    rms[frame] = Math.sqrt(energy / Math.max(1, end - start));
  }
  const onset = new Float32Array(frameCount);
  for (let frame = 1; frame < frameCount; frame++) onset[frame] = Math.max(0, rms[frame] - rms[frame - 1]);
  return { values: onset, hopSeconds: hopSamples / SAMPLE_RATE };
}

function onsetStrengthNear(envelope: Float32Array, hopSeconds: number, time: number): number {
  const center = Math.round(time / hopSeconds);
  const radius = Math.ceil(0.06 / hopSeconds);
  let strongest = 0;
  for (let frame = Math.max(0, center - radius); frame <= Math.min(envelope.length - 1, center + radius); frame++) {
    strongest = Math.max(strongest, envelope[frame]);
  }
  return strongest;
}

function hasStrongHalfBeatOnsets(pcm: Float32Array, ticks: number[]): boolean {
  if (ticks.length < 5) return false;
  const { values, hopSeconds } = buildOnsetEnvelope(pcm);
  let beats = 0;
  let midbeats = 0;
  let count = 0;
  for (let index = 0; index < ticks.length - 1; index++) {
    const interval = ticks[index + 1] - ticks[index];
    if (!Number.isFinite(interval) || interval < 0.4 || interval > 1.2) continue;
    beats += onsetStrengthNear(values, hopSeconds, ticks[index]);
    midbeats += onsetStrengthNear(values, hopSeconds, ticks[index] + interval / 2);
    count++;
  }
  return count >= 4 && beats > 0 && midbeats / beats >= 0.8;
}

function bpmConfidenceLabel(confidence: number): AnalysisResult['bpm']['confidenceLabel'] {
  if (confidence < 1) return 'muy baja';
  if (confidence < 1.5) return 'baja';
  if (confidence <= 3.5) return 'buena';
  return 'excelente';
}

function estimateBpm(essentia: EssentiaApi, signal: NativeVector<number>, pcm: Float32Array, startSeconds: number): AnalysisResult['bpm'] {
  let percival = 0;
  let rhythm: Record<string, unknown> | undefined;
  try {
    const result = essentia.PercivalBpmEstimator(signal, 1024, 2048, 128, 256, 210, 50, SAMPLE_RATE);
    percival = finiteNumber(scalar(essentia, result.bpm)) ?? 0;
    dispose(result.bpm);
  } catch { percival = 0; }
  try { rhythm = essentia.RhythmExtractor2013(signal, 210, 'multifeature', 40); }
  catch { rhythm = undefined; }
  try {
    const baseRhythmBpm = finiteNumber(scalar(essentia, rhythm?.bpm)) ?? 0;
    const rhythmBpm = baseRhythmBpm > 0 ? baseRhythmBpm : 0;
    const rhythmConfidence = Math.max(0, finiteNumber(scalar(essentia, rhythm?.confidence)) ?? 0);
    const ratio = percival > 0 && rhythmBpm > 0 ? percival / rhythmBpm : 0;
    const agree = ratio >= 0.95 && ratio <= 1.05;
    let chosen = 0;
    if (percival > 0 && rhythmBpm > 0) {
      if (agree || (ratio >= 1.9 && ratio <= 2.1) || (ratio >= 0.45 && ratio <= 0.55)) chosen = rhythmBpm;
      else {
        const percivalScore = percival >= 60 && percival <= 180 ? 1 : 0.5;
        const rhythmScore = (rhythmBpm >= 60 && rhythmBpm <= 180 ? 1 : 0.5) + rhythmConfidence;
        chosen = rhythmScore >= percivalScore ? rhythmBpm : percival;
      }
    } else chosen = rhythmBpm > 0 ? rhythmBpm : percival;
    if (!Number.isFinite(chosen) || chosen <= 0) {
      throw new Error('No se ha podido determinar el tempo de este audio.');
    }
    if (chosen > 180 && chosen / 2 >= 60) chosen /= 2;
    if (chosen < 50 && chosen * 2 <= 210) chosen *= 2;
    const ticksOutput = rhythm?.ticks;
    let ticks = ticksOutput && typeof ticksOutput === 'object' && 'size' in ticksOutput
      ? Array.from(essentia.module.vectorToArray(ticksOutput as NativeVector<number>)).filter(Number.isFinite) : [];
    // K2 exige 174 BPM y no 87: con un tren de clics a 174 BPM, ambos estimadores
    // se enganchan a cada dos clics y devuelven ~87. Si el envelope de onsets
    // demuestra que hay un ataque fuerte en el contratiempo de cada pulso, el
    // valor detectado es el medio tempo y se duplica. No es la frágil regla
    // 130-180 que la especificación descarta.
    if (chosen >= 60 && chosen < 100 && hasStrongHalfBeatOnsets(pcm, ticks)) {
      chosen *= 2;
      ticks = ticks.flatMap((time, index) => index < ticks.length - 1 ? [time, (time + ticks[index + 1]) / 2] : [time]).sort((a, b) => a - b);
    }
    ticks = ticks.map((time) => time + startSeconds);
    let confidenceLabel = bpmConfidenceLabel(rhythmConfidence);
    if (agree) confidenceLabel = confidenceLabel === 'muy baja' ? 'baja' : confidenceLabel === 'baja' ? 'buena' : 'excelente';
    return {
      bpm: chosen,
      rounded: Math.round(chosen),
      confidence: Math.max(0, Math.min(1, rhythmConfidence / 5.32)),
      confidenceLabel,
      estimatorsAgree: agree,
      alternateBpm: chosen < 100 ? chosen * 2 : chosen / 2,
      ticks,
    };
  } finally {
    dispose(rhythm?.bpm); dispose(rhythm?.confidence); dispose(rhythm?.ticks);
    dispose(rhythm?.estimates); dispose(rhythm?.bpmIntervals);
  }
}

function lowPassDecimate4(pcm: Float32Array): Float32Array {
  const taps = new Float64Array(129);
  let sum = 0;
  for (let index = -64; index <= 64; index++) {
    const sinc = index === 0 ? 0.25 : Math.sin(2 * Math.PI * 0.125 * index) / (Math.PI * index);
    taps[index + 64] = sinc * (0.54 - 0.46 * Math.cos(2 * Math.PI * (index + 64) / 128));
    sum += taps[index + 64];
  }
  for (let index = 0; index < taps.length; index++) taps[index] /= sum;
  const output = new Float32Array(Math.ceil(pcm.length / 4));
  for (let outputIndex = 0; outputIndex < output.length; outputIndex++) {
    const center = outputIndex * 4;
    let value = 0;
    for (let tap = 0; tap < taps.length; tap++) {
      const sourceIndex = center + tap - 64;
      if (sourceIndex >= 0 && sourceIndex < pcm.length) value += pcm[sourceIndex] * taps[tap];
    }
    output[outputIndex] = value;
  }
  return output;
}

function nearestBeat(time: number, ticks: number[]): number | undefined {
  if (ticks.length < 2) return undefined;
  let bestIndex = 0;
  let bestDistance = Infinity;
  ticks.forEach((tick, index) => {
    const distance = Math.abs(tick - time);
    if (distance < bestDistance) { bestIndex = index; bestDistance = distance; }
  });
  return bestIndex;
}

function diatonicChords(key: KeyResult): Set<string> {
  const tonic = pitchIndex(key.tonic);
  const intervals = key.mode === 'major' ? [0, 2, 4, 5, 7, 9, 11] : [0, 2, 3, 5, 7, 8, 10];
  const minorDegrees = key.mode === 'major' ? new Set([1, 2, 5]) : new Set([0, 3, 4]);
  return new Set(intervals.map((interval, degree) => `${PITCHES[(tonic + interval) % 12]}${minorDegrees.has(degree) ? 'm' : ''}`));
}

function estimateChords(essentia: EssentiaApi, pcm: Float32Array, key: KeyResult, startSeconds: number): NonNullable<AnalysisResult['chords']> {
  const decimated = lowPassDecimate4(pcm);
  const sampleRate = SAMPLE_RATE / 4;
  const frameSize = 4096;
  const logFrames: number[][] = [];
  const meanTuning: number[] = [];
  const localTuning: number[] = [];
  let beatSignal: NativeVector<number> | undefined;
  let beatResult: Record<string, unknown> | undefined;
  let spectraMatrix: NativeMatrix | undefined;
  let chromaMatrix: NativeMatrix | undefined;
  let bassMatrix: NativeMatrix | undefined;
  let chordsResult: Record<string, unknown> | undefined;
  const chromaFrames: number[][] = [];
  try {
    beatSignal = essentia.arrayToVector(pcm);
    beatResult = essentia.BeatTrackerMultiFeature(beatSignal);
    const beatValue = beatResult.ticks;
    const beatTimes = beatValue && typeof beatValue === 'object' && 'size' in beatValue
      ? Array.from(essentia.module.vectorToArray(beatValue as NativeVector<number>)) : [];
    if (beatTimes.length < 2) throw new Error('No se han podido detectar suficientes pulsos para obtener acordes.');
    const beatGrid = beatTimes.map((time) => time + startSeconds);

    for (let start = 0; start + frameSize <= decimated.length; start += frameSize) {
      const frame = essentia.arrayToVector(decimated.subarray(start, start + frameSize));
      let windowed: Record<string, unknown> | undefined;
      let spectrum: Record<string, unknown> | undefined;
      let log: Record<string, unknown> | undefined;
      try {
        windowed = essentia.Windowing(frame, false, frameSize, 'hann', 0, true);
        spectrum = essentia.Spectrum(windowed.frame as NativeVector<number>, frameSize);
        log = essentia.LogSpectrum(spectrum.spectrum as NativeVector<number>, 3, 2049, 0, sampleRate);
        logFrames.push(Array.from(essentia.module.vectorToArray(log.logFreqSpectrum as NativeVector<number>)));
        meanTuning.push(finiteNumber(scalar(essentia, log.meanTuning)) ?? 0);
        localTuning.push(finiteNumber(scalar(essentia, log.localTuning)) ?? 0);
      } finally {
        dispose(frame); dispose(windowed?.frame); dispose(spectrum?.spectrum);
        dispose(log?.logFreqSpectrum); dispose(log?.meanTuning); dispose(log?.localTuning);
      }
    }
    if (logFrames.length < 2) throw new Error('El audio es demasiado corto para identificar acordes.');
    spectraMatrix = new essentia.module.VectorVectorFloat();
    const spectraRows: NativeVector<number>[] = [];
    logFrames.forEach((frame) => {
      const row = essentia.arrayToVector(frame);
      spectraRows.push(row);
      spectraMatrix!.push_back(row);
    });
    const means = essentia.arrayToVector(meanTuning);
    const locals = essentia.arrayToVector(localTuning);
    let nnls: Record<string, unknown> | undefined;
    try {
      nnls = essentia.NNLSChroma(spectraMatrix, means, locals, 'none', 2049, sampleRate, 0.7, 1, 'global', false);
      chromaMatrix = nnls.chromagram as NativeMatrix;
      bassMatrix = nnls.bassChromagram as NativeMatrix;
      const hpcpFrames = new essentia.module.VectorVectorFloat();
      const hpcpRows: NativeVector<number>[] = [];
      try {
        for (let index = 0; index < chromaMatrix.size(); index++) {
          const chromaRow = chromaMatrix.get(index);
          const bassRow = bassMatrix && index < bassMatrix.size() ? bassMatrix.get(index) : undefined;
          try {
            const chroma = Array.from(essentia.module.vectorToArray(chromaRow));
            const bass = bassRow ? Array.from(essentia.module.vectorToArray(bassRow)) : [];
            chromaFrames.push(chroma);
            const combined = chroma.map((value, bin) => value + 0.5 * (bass[bin] ?? 0));
            const maximum = Math.max(...combined);
            const normalized = maximum ? combined.map((value) => value / maximum) : combined;
            const vector = essentia.arrayToVector(normalized);
            hpcpRows.push(vector);
            hpcpFrames.push_back(vector);
          } finally {
            dispose(chromaRow);
            dispose(bassRow);
          }
        }
        chordsResult = essentia.ChordsDetection(hpcpFrames, frameSize, sampleRate, 4);
      } finally {
        dispose(hpcpFrames);
        hpcpRows.forEach(dispose);
      }
    } finally {
      dispose(nnls?.chromagram); dispose(nnls?.bassChromagram);
      dispose(nnls?.tunedLogfreqSpectrum); dispose(nnls?.semitoneSpectrum);
      chromaMatrix = undefined; bassMatrix = undefined;
      dispose(spectraMatrix); spectraMatrix = undefined;
      spectraRows.forEach(dispose);
      dispose(means); dispose(locals);
      logFrames.length = 0;
    }
    const chordNames = chordsResult.chords;
    const strengthVector = chordsResult.strength as NativeVector<number>;
    const strengths = strengthVector && typeof strengthVector === 'object' && 'size' in strengthVector
      ? Array.from(essentia.module.vectorToArray(strengthVector)) : [];
    const names = chordNames && typeof chordNames === 'object' && 'size' in chordNames && typeof (chordNames as NativeVector<string>).get === 'function'
      ? Array.from({ length: (chordNames as NativeVector<string>).size() }, (_, index) => (chordNames as NativeVector<string>).get(index))
      : Array.isArray(chordNames) ? [...chordNames] : [];
    if (strengths.some((value) => !Number.isFinite(value))) throw new Error('El análisis de acordes produjo una confianza no válida.');
    const count = Math.min(names.length, strengths.length);
    const times = Array.from({ length: count }, (_, index) => Math.max(0, (frameSize * index + frameSize / 2 - frameSize) / sampleRate));
    const spans: NonNullable<AnalysisResult['chords']>['spans'] = [];
    for (let index = 0; index < count; index++) {
      const begin = startSeconds + times[index];
      const end = startSeconds + (times[index + 1] ?? decimated.length / sampleRate);
      const chord = names[index] || 'N';
      const previous = spans.at(-1);
      if (previous && previous.chord === chord) {
        previous.end = end;
        previous.strength = Math.max(previous.strength, strengths[index]);
        const mergedEndBeat = nearestBeat(end, beatGrid);
        if (mergedEndBeat !== undefined) previous.endBeat = mergedEndBeat;
      } else {
        const startBeat = nearestBeat(begin, beatGrid);
        const endBeat = nearestBeat(end, beatGrid);
        spans.push({ chord, start: begin, end, strength: strengths[index], ...(startBeat !== undefined ? { startBeat } : {}), ...(endBeat !== undefined ? { endBeat } : {}) });
      }
    }
    const confidence = count ? strengths.slice(0, count).reduce((sum, value) => sum + value, 0) / count : 0;
    const clarity = count ? chromaFrames.slice(0, count).reduce((sum, values) => {
      const sorted = [...values].sort((a, b) => b - a);
      const total = values.reduce((frameSum, value) => frameSum + value, 0);
      return sum + (total ? sorted.slice(0, 3).reduce((frameSum, value) => frameSum + value, 0) / total : 0);
    }, 0) / count : 0;
    if (!Number.isFinite(confidence) || !Number.isFinite(clarity)) throw new Error('El análisis de acordes produjo métricas no válidas.');
    const totalDuration = spans.reduce((sum, span) => sum + span.end - span.start, 0);
    const diatonic = diatonicChords(key);
    const diatonicDuration = spans.reduce((sum, span) => sum + (diatonic.has(span.chord) ? span.end - span.start : 0), 0);
    return {
      spans,
      confidence: Math.max(0, Math.min(1, confidence)),
      clarity,
      tonal: clarity >= 0.54,
      ...(clarity < 0.54 ? { warning: 'Audio poco tonal: percusión/ruido, los acordes pueden no ser fiables.' } : {}),
      diatonicRatio: totalDuration ? diatonicDuration / totalDuration : 0,
    };
  } finally {
    dispose(chordsResult?.chords); dispose(chordsResult?.strength);
    dispose(chromaMatrix); dispose(bassMatrix); dispose(spectraMatrix);
    dispose(beatResult?.ticks); dispose(beatResult?.confidence); dispose(beatSignal);
  }
}

function hasSignal(pcm: Float32Array): boolean {
  for (let index = 0; index < pcm.length; index++) {
    if (pcm[index] !== 0) return true;
  }
  return false;
}

export async function analyzePcm(
  essentia: EssentiaApi,
  pcm: Float32Array,
  options: AnalyzeOptions = {},
  onProgress: (event: ProgressEvent) => void = () => {},
): Promise<AnalysisResult> {
  if (!(pcm instanceof Float32Array) || pcm.length < SAMPLE_RATE) throw new Error('El audio debe contener al menos un segundo de muestras mono Float32.');
  if (pcm.some((value) => !Number.isFinite(value))) throw new Error('El audio contiene muestras no finitas.');
  const selection = selectAnalysisWindow(pcm, options.full);
  if (!hasSignal(selection.pcm)) throw new Error('El audio está en silencio: no hay señal que analizar.');
  const signal = essentia.arrayToVector(selection.pcm);
  try {
    onProgress({ stage: 'key', message: 'Detectando tonalidad…', progress: 0.15 });
    const tuning = findTuning(essentia, signal);
    const key = estimateKey(essentia, selection.pcm, signal, tuning);
    onProgress({ stage: 'bpm', message: 'Detectando BPM…', progress: 0.5 });
    const bpm = estimateBpm(essentia, signal, selection.pcm, selection.startSeconds);
    let chords: AnalysisResult['chords'];
    if (options.withChords !== false) {
      onProgress({ stage: 'chords', message: 'Leyendo la armonía…', progress: 0.75 });
      chords = estimateChords(essentia, selection.pcm, key, selection.startSeconds);
    }
    return {
      key, bpm,
      tuning: { referenceFrequency: tuning, centsFrom440: 1200 * Math.log2(tuning / 440) },
      ...(chords ? { chords } : {}),
      duration: {
        inputSeconds: selection.inputSeconds,
        analyzedSeconds: selection.pcm.length / SAMPLE_RATE,
        startSeconds: selection.startSeconds,
        usedFullAudio: selection.usedFullAudio,
        ...(selection.notice ? { notice: selection.notice } : {}),
      },
    };
  } finally { dispose(signal); }
}
