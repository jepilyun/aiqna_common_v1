export declare const F_TEXT_PROCESSING_LOG: {
    id: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    hash_key: {
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
    error_message: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    index_name: {
        id: string;
        label: string;
        is_required: boolean;
        max_length: number;
        placeholder: string;
    };
    is_pinecone_processed: {
        id: string;
        label: string;
        is_required: boolean;
        placeholder: string;
        default_value: boolean;
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
