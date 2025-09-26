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
    created_at: string;
    updated_at: string;
    last_processed_at: string | null;
};
export type TSqlYoutubeVideoProcessingLogInsert = {
    video_id: string;
    processing_status: string;
} & Partial<Omit<TSqlYoutubeVideoProcessingLog, "video_id" | "processing_status">>;
export type TSqlYoutubeVideoProcessingLogUpdate = {
    video_id: string;
} & Partial<Omit<TSqlYoutubeVideoProcessingLog, "video_id">>;
