export type TSqlQnaLogListForAdmin = {
    id: string;
    question_lang: string;
    question_native: string | null;
    user_feedback: string | null;
    user_rating: number | null;
    ai_model: string | null;
    ai_confidence: number | null;
    response_time_ms: number | null;
    token_count: number | null;
    is_helpful: boolean | null;
    is_flagged: boolean | null;
    is_reviewed: boolean | null;
};
export type TSqlQnaLogDetail = TSqlQnaLogListForAdmin & {
    question_en: string | null;
    answer_en: string | null;
    answer_native: string | null;
    user_comment: string | null;
    user_id: string | null;
    session_id: string | null;
    ip_hash: string | null;
    context_type: string | null;
    context_id: string | null;
    referenced_sources: string | null;
    created_at: string;
    updated_at: string;
    flagged_reason: string | null;
    reviewed_at: string | null;
    reviewed_by: string | null;
};
export type TSqlQnaLogDetailInsert = {
    id: string;
    question_native: string;
} & Partial<Omit<TSqlQnaLogDetail, "id" | "question_native">>;
export type TSqlQnaLogDetailUpdate = {
    id: string;
} & Partial<Omit<TSqlQnaLogDetail, "id">>;
export declare const DB_COLUMNS_QNA_LOG_LIST_FOR_ADMIN: string[];
export declare const KEYS_QNA_LOG_STR: string[];
export declare const KEYS_QNA_LOG_NUM: string[];
export declare const KEYS_QNA_LOG_BOOL: string[];
export declare const KEYS_QNA_LOG_STR_ARRAY: string[];
