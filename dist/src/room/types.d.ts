import type { DataStream_Chunk } from '@livekit/protocol';
export type SimulationOptions = {
    publish?: {
        audio?: boolean;
        video?: boolean;
        useRealTracks?: boolean;
    };
    participants?: {
        count?: number;
        aspectRatios?: Array<number>;
        audio?: boolean;
        video?: boolean;
    };
};
export interface SendTextOptions {
    topic?: string;
    destinationIdentities?: Array<string>;
    attachments?: Array<File>;
    onProgress?: (progress: number) => void;
    attributes?: Record<string, string>;
}
export interface StreamTextOptions {
    topic?: string;
    destinationIdentities?: Array<string>;
    type?: 'create' | 'update';
    streamId?: string;
    version?: number;
    attachedStreamIds?: Array<string>;
    replyToStreamId?: string;
    totalSize?: number;
    attributes?: Record<string, string>;
}
export type DataPublishOptions = {
    /**
     * whether to send this as reliable or lossy.
     * For data that you need delivery guarantee (such as chat messages), use Reliable.
     * For data that should arrive as quickly as possible, but you are ok with dropped
     * packets, use Lossy.
     */
    reliable?: boolean;
    /**
     * the identities of participants who will receive the message, will be sent to every one if empty
     */
    destinationIdentities?: string[];
    /** the topic under which the message gets published */
    topic?: string;
};
export type LiveKitReactNativeInfo = {
    platform: 'ios' | 'android' | 'windows' | 'macos' | 'web' | 'native';
    devicePixelRatio: number;
};
export type SimulationScenario = 'signal-reconnect' | 'speaker' | 'node-failure' | 'server-leave' | 'migration' | 'resume-reconnect' | 'force-tcp' | 'force-tls' | 'full-reconnect' | 'subscriber-bandwidth' | 'disconnect-signal-on-resume' | 'disconnect-signal-on-resume-no-messages' | 'leave-full-reconnect';
export type LoggerOptions = {
    loggerName?: string;
    loggerContextCb?: () => Record<string, unknown>;
};
export interface TranscriptionSegment {
    id: string;
    text: string;
    language: string;
    startTime: number;
    endTime: number;
    final: boolean;
    firstReceivedTime: number;
    lastReceivedTime: number;
}
export interface ChatMessage {
    id: string;
    timestamp: number;
    message: string;
    editTimestamp?: number;
    attachedFiles?: Array<File>;
}
export interface StreamController<T extends DataStream_Chunk> {
    info: BaseStreamInfo;
    controller: ReadableStreamDefaultController<T>;
    startTime: number;
    endTime?: number;
}
export interface BaseStreamInfo {
    id: string;
    mimeType: string;
    topic: string;
    timestamp: number;
    /** total size in bytes for finite streams and undefined for streams of unknown size */
    size?: number;
    attributes?: Record<string, string>;
}
export interface ByteStreamInfo extends BaseStreamInfo {
    name: string;
}
export interface TextStreamInfo extends BaseStreamInfo {
}
//# sourceMappingURL=types.d.ts.map