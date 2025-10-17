export type TSqlProcessingLogInstagramPost = {
    instagram_post_url: string;
    processing_status: string;
    index_name: string | null;
    is_data_fetched: boolean;
    is_pinecone_processed: boolean;
    is_error_occurred: boolean;
    error_message: string | null;
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
export type TSqlProcessingLogInstagramPostInsert = {
    instagram_post_url: string;
} & Partial<Omit<TSqlProcessingLogInstagramPost, 'instagram_post_url'>>;
export type TSqlProcessingLogInstagramPostUpdate = {
    instagram_post_url: string;
} & Partial<Omit<TSqlProcessingLogInstagramPost, 'instagram_post_url'>>;
