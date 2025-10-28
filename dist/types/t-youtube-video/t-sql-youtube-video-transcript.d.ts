export type TSqlYoutubeVideoTranscript = {
    id: string;
    video_id: string;
    language: string;
    total_duration: number | null;
    segment_count: number;
    segments_storage_path: string | null;
    segments_file_size: number | null;
    created_at: string;
    updated_at: string;
};
export type TSqlYoutubeVideoTranscriptInsert = {
    video_id: string;
    language?: string;
    total_duration?: number;
    segment_count?: number;
    segments_storage_path?: string;
    segments_file_size?: number;
};
export type TSqlYoutubeVideoTranscriptUpdate = Partial<Omit<TSqlYoutubeVideoTranscript, "id" | "video_id">>;
