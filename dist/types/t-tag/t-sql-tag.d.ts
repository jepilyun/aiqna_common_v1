export type TSqlTagDetail = {
    id: string;
    tag: string;
    content_count: number;
    created_at: string;
    updated_at: string;
    is_active: boolean;
};
export type TSqlTagDetailInsert = {
    id: string;
    tag: string;
} & Partial<Omit<TSqlTagDetail, "id" | "tag">>;
export type TSqlTagDetailUpdate = Partial<Omit<TSqlTagDetail, "id" | "tag">>;
export declare const KEYS_TAG_STR: string[];
export declare const KEYS_TAG_NUM: string[];
export declare const KEYS_TAG_BOOL: string[];
export declare const KEYS_TAG_STR_ARRAY: never[];
