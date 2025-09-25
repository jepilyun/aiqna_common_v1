export type TYoutubeVideoTranscript = {
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
export type TYoutubeVideoTranscriptInsert = {
    video_id: string;
    language: string;
} & Partial<Omit<TYoutubeVideoTranscript, "video_id" | "language">>;
export type TYoutubeVideoTranscriptUpdate = {
    video_id: string;
} & Partial<Omit<TYoutubeVideoTranscript, "video_id">>;
