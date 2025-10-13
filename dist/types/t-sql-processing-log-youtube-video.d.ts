export type TSqlProcessingLogYoutubeVideo = {
    video_id: string;
    processing_status: string;
    error_message: string | null;
    index_name: string | null;
    is_transcript_exist: boolean;
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
export type TSqlProcessingLogYoutubeVideoInsert = {
    video_id: string;
} & Partial<Omit<TSqlProcessingLogYoutubeVideo, "video_id">>;
export type TSqlProcessingLogYoutubeVideoUpdate = {
    video_id?: string;
} & Partial<Omit<TSqlProcessingLogYoutubeVideo, "video_id">>;
