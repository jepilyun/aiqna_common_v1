export declare const F_PROCESSING_LOG_BLOG_POST: {
    id: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    blog_post_url: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    processing_status: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
        default_value: string;
    };
    index_name: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    is_data_fetched: {
        id: string;
        label: string;
        is_required: boolean;
        placeholder: string;
        default_value: boolean;
    };
    is_pinecone_processed: {
        id: string;
        label: string;
        is_required: boolean;
        placeholder: string;
        default_value: boolean;
    };
    is_error_occurred: {
        id: string;
        label: string;
        is_required: boolean;
        placeholder: string;
        default_value: boolean;
    };
    error_message: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
        default_value: null;
    };
    processing_started: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    processing_completed: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    retry_count: {
        id: string;
        label: string;
        is_required: boolean;
        placeholder: string;
        default_value: number;
    };
    created_at: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    updated_at: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    last_processed_at: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    source: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    priority: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
        default_value: number;
    };
    assigned_worker: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
};
