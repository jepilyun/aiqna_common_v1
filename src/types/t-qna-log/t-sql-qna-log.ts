/*
 * DB 컬럼 목록 For QNA Log List For Admin
 */
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

/*
 * DB 컬럼 목록 For Street Detail
 */
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

/*
 * DB 컬럼 목록 For QNA Log Detail Insert
 */
export type TSqlQnaLogDetailInsert = {
  id: string;
  question_native: string;
} & Partial<
  Omit<
    TSqlQnaLogDetail,
    | "id"
    | "question_native"
  >
>;

/*
 * DB 컬럼 목록 For QNA Log Detail Update
 */
export type TSqlQnaLogDetailUpdate = Partial<Omit<TSqlQnaLogDetail, "id">>;

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


