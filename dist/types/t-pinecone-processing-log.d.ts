export type TPineconeProcessingLog = {
    id: string;
    video_id: string;
    index_name: string;
    chunk_count: number;
    processing_status: string | null;
    error_message: string | null;
    started_at: string | null;
    completed_at: string | null;
    processing_duration_seconds: number;
    created_at: string;
};
export type TPineconeProcessingLogInsert = {
    video_id: string;
    index_name: string;
    processing_status: string;
} & Partial<Omit<TPineconeProcessingLog, "video_id" | "index_name" | "processing_status">>;
export type TPineconeProcessingLogUpdate = {
    video_id: string;
} & Partial<Omit<TPineconeProcessingLog, "video_id">>;
