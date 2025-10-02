export type TSqlTextList = {
    id: string;
    hash_key: string;
    title: string;
    created_at: string;
    updated_at: string;
    last_processed_at: string | null;
    is_active: boolean;
    is_deleted: boolean;
};
export type TSqlTextDetail = TSqlTextList & {
    content: string;
    metadata_json: string | null;
    deleted_at: string | null;
};
export type TSqlTextDetailInsert = {
    hash_key: string;
} & Partial<Omit<TSqlTextDetail, "hash_key">>;
export type TSqlTextDetailUpdate = {
    id?: string;
    hash_key?: string;
} & Partial<Omit<TSqlTextDetail, "id" | "hash_key">>;
export declare const SQL_DB_COLUMNS_TEXT_LIST: string[];
export declare const SQL_DB_COLUMNS_TEXT_DETAIL: string[];
