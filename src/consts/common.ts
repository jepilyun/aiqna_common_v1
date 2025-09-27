/**
 * 리스트 조회 기본 제한 개수
 */
export const LIST_LIMIT = {
  default: 50,
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
  AA_country: "AA",
  KR_country: "KR",
  index_seoul: 2,
  code_city_seoul: "seoul",
  upper_category_none: "NONE",
  language: "ko",
  NONE: "NONE",
  not_selected: "NOT_SELECTED",
  AA_category: "AA",
};


export type TProcessingStatus =
  | "pending"
  | "processing"
  | "completed"
  | "failed";

export type TSupportedLanguage =
  | "ko"
  | "en"
  | "ja"
  | "zh-hans"
  | "zh-hant"
  | "es"
  | "fr"
  | "de";


export const PINECONE_INDEX_NAME = {
  YOUTUBE_TRANSCRIPT_TRAVEL_SEOUL: {
    OPENAI_SMALL: "youtube-transcript-travel-seoul-openai-small",
    COHERE_MULTI: "youtube-transcript-travel-seoul-cohere-multi",
    VOYAGE_LARGE_2: "youtube-transcript-travel-seoul-voyage-large-2",
    HF_KOREAN: "youtube-transcript-travel-seoul-hf-korean",
  },
  YOUTUBE_TRANSCRIPT_TRAVEL_BUSAN: {
    OPENAI_SMALL: "youtube-transcript-travel-busan-openai-small",
    COHERE_MULTI: "youtube-transcript-travel-busan-cohere-multi",
    VOYAGE_LARGE_2: "youtube-transcript-travel-busan-voyage-large-2",
    HF_KOREAN: "youtube-transcript-travel-busan-hf-korean",
  },
  YOUTUBE_TRANSCRIPT_TRAVEL_JEJU: {
    OPENAI_SMALL: "youtube-transcript-travel-jeju-openai-small",
    COHERE_MULTI: "youtube-transcript-travel-jeju-cohere-multi",
    VOYAGE_LARGE_2: "youtube-transcript-travel-jeju-voyage-large-2",
    HF_KOREAN: "youtube-transcript-travel-jeju-hf-korean",
  },
} as const;

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
} as const;

// Provider 타입 정의
export type EmbeddingProviderType = 'openai' | 'cohere' | 'voyage' | 'huggingface' | 'gemini';

// 타입 추출 (개선된 버전)
export type PineconeIndexName = 
  typeof PINECONE_INDEX_NAME[keyof typeof PINECONE_INDEX_NAME][keyof typeof PINECONE_INDEX_NAME['YOUTUBE_TRANSCRIPT_TRAVEL_SEOUL']];
