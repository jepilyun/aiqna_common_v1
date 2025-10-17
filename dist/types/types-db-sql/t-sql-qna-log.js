/*
 * DB 컬럼 목록 For City List For Admin
 */
export const DB_COLUMNS_QNA_LOG_LIST_FOR_ADMIN = [
    "country_code",
    "question_native",
    "user_feedback",
    "user_rating",
    "ai_model",
    "ai_confidence",
    "response_time_ms",
    "token_count",
    "is_helpful",
    "is_flagged",
    "is_reviewed",
];
/*
 * 도로 데이터 문자열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_QNA_LOG_STR = [
    "id",
    "question_lang",
    "question_native",
    "question_en",
    "answer_en",
    "answer_native",
    "user_feedback",
    "user_comment",
    "ai_model",
    "user_id",
    "session_id",
    "ip_hash",
    "created_at",
    "updated_at",
    "flagged_reason",
    "reviewed_at",
    "reviewed_by",
];
/*
 * 도로 데이터 숫자 KEY 목록
 * FormDataParsing 할 때 사용
 */
export const KEYS_QNA_LOG_NUM = ["user_rating", "ai_confidence", "response_time_ms", "token_count"];
/*
 * 도로 데이터 불리언 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_QNA_LOG_BOOL = ["is_helpful", "is_flagged", "is_reviewed"];
/*
 * 도로 데이터 문자열 배열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_QNA_LOG_STR_ARRAY = ["context_type", "context_id", "referenced_sources"];
//# sourceMappingURL=t-sql-qna-log.js.map