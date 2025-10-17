export type TSqlProcessingLogBlogPost = {
    blog_post_url: string;
    processing_status: string;
    index_name: string;
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
    source: string | null;
    priority: number;
    assigned_worker: string | null;
};
export type TSqlProcessingLogBlogPostInsert = {
    blog_post_url: string;
} & Partial<Omit<TSqlProcessingLogBlogPost, "blog_post_url">>;
export type TSqlProcessingLogBlogPostUpdate = {
    blog_post_url: string;
} & Partial<Omit<TSqlProcessingLogBlogPost, "blog_post_url">>;
