// ============================================================
// List Pagination
// ============================================================

/**
 * 리스트 조회 기본 제한 개수
 */
export const LIST_LIMIT = {
  start: 0,
  default: 36,
  n30: 30,
  n50: 50,
  n100: 100,
  n200: 200,
} as const;

// ============================================================
// Authentication
// ============================================================

/**
 * 쿠키 이름
 */
export const COOKIE_NAME = {
  access_token_admin: "aiqna-access-token-admin",
  refresh_token_admin: "aiqna-refresh-token-admin",
  access_token_user: "aiqna-access-token",
  refresh_token_user: "aiqna-refresh-token",
} as const;

// ============================================================
// Default Values
// ============================================================

/**
 * 앱 전역 기본값
 */
export const DEFAULT_VALUES = {
  COUNTRY: {
    ALL: "AA",
    KOREA: "KR",
  },
  CITY: {
    SEOUL_CODE: "seoul",
    SEOUL_INDEX: 2,
  },
  CATEGORY: {
    ALL: "AA",
    NONE: "NONE",
  },
  LANGUAGE: "ko",
  NOT_SELECTED: "NOT_SELECTED",
} as const;

// ============================================================
// Processing Status
// ============================================================

/**
 * 비동기 작업 처리 상태
 */
export const PROCESSING_STATUS = {
  PENDING: "pending",
  PROCESSING: "processing",
  COMPLETED: "completed",
  FAILED: "failed",
} as const;

export type ProcessingStatus =
  (typeof PROCESSING_STATUS)[keyof typeof PROCESSING_STATUS];

// ============================================================
// Vector Database
// ============================================================

/**
 * Pinecone 인덱스 이름
 * 패턴: {도메인}-{도시}-{임베딩모델}
 */
export const VECTOR_DB_INDEX = {
  TRAVEL_SEOUL: {
    OPENAI_SMALL: "travel-seoul-openai-small",
    COHERE_MULTI: "travel-seoul-cohere-multi",
    VOYAGE_LARGE_2: "travel-seoul-voyage-large-2",
    HF_KOREAN: "travel-seoul-hf-korean",
  },
  TRAVEL_BUSAN: {
    OPENAI_SMALL: "travel-busan-openai-small",
    COHERE_MULTI: "travel-busan-cohere-multi",
    VOYAGE_LARGE_2: "travel-busan-voyage-large-2",
    HF_KOREAN: "travel-busan-hf-korean",
  },
  TRAVEL_JEJU: {
    OPENAI_SMALL: "travel-jeju-openai-small",
    COHERE_MULTI: "travel-jeju-cohere-multi",
    VOYAGE_LARGE_2: "travel-jeju-voyage-large-2",
    HF_KOREAN: "travel-jeju-hf-korean",
  },
} as const;

// ============================================================
// Embedding Models
// ============================================================

/**
 * 임베딩 모델 ID
 * @see https://platform.openai.com/docs/guides/embeddings
 * @see https://docs.cohere.com/docs/models#embed
 * @see https://docs.voyageai.com/docs/embeddings
 */
export const EMBEDDING_MODEL = {
  OPENAI: {
    SMALL: "text-embedding-3-small", // 1536 dims
    MEDIUM: "text-embedding-3-medium",
    LARGE: "text-embedding-3-large", // 3072 dims
  },
  COHERE: {
    MULTI: "embed-multilingual-v3.0", // 1024 dims, 100+ languages
  },
  VOYAGE: {
    LARGE_2: "voyage-large-2", // 1536 dims
  },
  HUGGINGFACE: {
    KO_SROBERTA_MULTITASK: "jhgan/ko-sroberta-multitask", // 768 dims, 한국어 특화
  },
  GEMINI: {
    BASE: "text-embedding-004",
    LARGE: "text-embedding-004-large",
  },
} as const;

// ============================================================
// Form Types
// ============================================================

/**
 * 폼 필드 공통 Props
 */
export type TFormFieldProps = {
  id: string;
  label: string;
  is_required: boolean;
  max_length?: number;
  placeholder?: string;
};