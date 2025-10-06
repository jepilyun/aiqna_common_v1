export type TSqlInstagramPostProcessingLog = {
    id: string;
    instagram_post_url: string;
    processing_status: string;
    error_message: string | null;
    index_name: string;
    is_data_fetched: boolean;
    is_pinecone_processed: boolean;
    processing_started: string | null;
    processing_completed: string | null;
    retry_count: number;
    created_at: string;
    updated_at: string;
    last_processed_at: string | null;
    source?: string | null;
    priority: number;
    assigned_worker: string | null;
};
export type TSqlInstagramPostProcessingLogInsert = {
    instagram_post_url: string;
} & Partial<Omit<TSqlInstagramPostProcessingLog, 'instagram_post_url'>>;
export type TSqlInstagramPostProcessingLogUpdate = Partial<Omit<TSqlInstagramPostProcessingLog, 'id' | 'instagram_post_url'>>;
