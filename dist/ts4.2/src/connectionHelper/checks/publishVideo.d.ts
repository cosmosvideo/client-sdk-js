import { Checker } from './Checker';
export declare class PublishVideoCheck extends Checker {
    get description(): string;
    perform(): Promise<void>;
    checkForVideo(track: MediaStreamTrack): Promise<void>;
}
//# sourceMappingURL=publishVideo.d.ts.map
