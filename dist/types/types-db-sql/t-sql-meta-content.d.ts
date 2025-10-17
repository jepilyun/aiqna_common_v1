export type TSqlMetaContent = {
    id: string;
    content_name: string;
    city_name: string;
    source_type: string;
    source_id: string;
    content_code: string | null;
    admin_message: string | null;
    is_processed: boolean;
    processed_at: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlMetaContentInsert = {
    id?: string | null;
} & Partial<Omit<TSqlMetaContent, "id">>;
export type TSqlMetaContentUpdate = {
    id: string;
} & Partial<Omit<TSqlMetaContent, "id">>;
