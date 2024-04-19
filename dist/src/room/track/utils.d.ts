import { TrackPublishedResponse } from '@livekit/protocol';
import { Track } from './Track';
import type { TrackPublication } from './TrackPublication';
import { type AudioCaptureOptions, type CreateLocalTracksOptions, type ScreenShareCaptureOptions, type VideoCaptureOptions } from './options';
import type { AudioTrack } from './types';
export declare function mergeDefaultOptions(options?: CreateLocalTracksOptions, audioDefaults?: AudioCaptureOptions, videoDefaults?: VideoCaptureOptions): CreateLocalTracksOptions;
export declare function constraintsForOptions(options: CreateLocalTracksOptions): MediaStreamConstraints;
/**
 * This function detects silence on a given [[Track]] instance.
 * Returns true if the track seems to be entirely silent.
 */
export declare function detectSilence(track: AudioTrack, timeOffset?: number): Promise<boolean>;
/**
 * @internal
 */
export declare function getNewAudioContext(): AudioContext | void;
/**
 * @internal
 */
export declare function kindToSource(kind: MediaDeviceKind): Track.Source.Camera | Track.Source.Microphone | Track.Source.Unknown;
/**
 * @internal
 */
export declare function sourceToKind(source: Track.Source): MediaDeviceKind | undefined;
/**
 * @internal
 */
export declare function screenCaptureToDisplayMediaStreamOptions(options: ScreenShareCaptureOptions): DisplayMediaStreamOptions;
export declare function mimeTypeToVideoCodecString(mimeType: string): "vp8" | "h264" | "vp9" | "av1";
export declare function getTrackPublicationInfo<T extends TrackPublication>(tracks: T[]): TrackPublishedResponse[];
export declare function getLogContextFromTrack(track: Track | TrackPublication): Record<string, unknown>;
//# sourceMappingURL=utils.d.ts.map