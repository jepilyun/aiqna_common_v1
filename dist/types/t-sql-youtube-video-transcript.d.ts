import { TYouTubeTranscriptSegment } from "./t-youtube-transcript";
export type TSqlYoutubeVideoTranscript = {
    id: string;
    video_id: string;
    language: string;
    total_duration: number | null;
    segment_count: number;
    segments_json: string | null;
    full_text: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlYoutubeVideoTranscriptInsert = {
    video_id: string;
    language?: string;
    total_duration?: number;
    segment_count?: number;
    segments_json: TYouTubeTranscriptSegment[];
    full_text?: string;
};
export type TSqlYoutubeVideoTranscriptUpdate = {
    video_id: string;
} & Partial<Omit<TSqlYoutubeVideoTranscript, "video_id">>;
