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
};
/**
 * 쿠키 이름
 */
export const COOKIE_NAME = {
    access_token_admin: "aiqna-access-token-admin",
    refresh_token_admin: "aiqna-refresh-token-admin",
    access_token_user: "aiqna-access-token",
    refresh_token_user: "aiqna-refresh-token",
};
/**
 * 기본 값 목록
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
};
export const PROCESSING_STATUS = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    COMPLETED: 'completed',
    FAILED: 'failed',
};
export const PINECONE_INDEX_NAME = {
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
};
export const EMBEDDING_MODEL = {
    OPENAI: {
        SMALL: "text-embedding-3-small",
        MEDIUM: "text-embedding-3-medium",
        LARGE: "text-embedding-3-large",
    },
    COHERE: {
        MULTI: "embed-multilingual-v3.0",
    },
    VOYAGE: {
        LARGE_2: "voyage-large-2",
    },
    HUGGINGFACE: {
        KO_SROBERTA_MULTITASK: "jhgan/ko-sroberta-multitask",
    },
    GEMINI: {
        BASE: "text-embedding-004",
        LARGE: "text-embedding-004-large",
    },
};
//# sourceMappingURL=common.js.map