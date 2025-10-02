export type TSqlYoutubeVideoProcessingLog = {
    id: string;
    video_id: string;
    processing_status: string;
    error_message: string | null;
    index_name: string;
    is_api_data_fetched: boolean;
    is_transcript_fetched: boolean;
    is_pinecone_processed: boolean;
    processing_started: string | null;
    processing_completed: string | null;
    retry_count: number;
    created_at: string;
    updated_at: string;
    last_processed_at: string | null;
    source: string | null;
    priority: number;
    assigned_worker: string | null;
};
export type TSqlYoutubeVideoProcessingLogInsert = {
    video_id: string;
} & Partial<Omit<TSqlYoutubeVideoProcessingLog, "video_id">>;
export type TSqlYoutubeVideoProcessingLogUpdate = {
    id?: string;
    video_id?: string;
} & Partial<Omit<TSqlYoutubeVideoProcessingLog, "id" | "video_id">>;
