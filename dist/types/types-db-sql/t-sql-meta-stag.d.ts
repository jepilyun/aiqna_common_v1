export type TSqlMetaStag = {
    id: string;
    stag_name: string;
    source_type: string;
    source_id: string;
    stag_code: string | null;
    admin_message: string | null;
    is_processed: boolean;
    processed_at: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlMetaStagInsert = {
    id?: string | null;
} & Partial<Omit<TSqlMetaStag, "id">>;
export type TSqlMetaStagUpdate = {
    id: string;
} & Partial<Omit<TSqlMetaStag, "id">>;
