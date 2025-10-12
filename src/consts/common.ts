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
} as const;


export const PROCESSING_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  FAILED: 'failed',
} as const;

export type ProcessingStatus = typeof PROCESSING_STATUS[keyof typeof PROCESSING_STATUS];


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
export type PineconeIndexName = string; // 또는 리터럴 유니온으로 제한


/**
 * Request Create Content Type Enum
 */
export enum ERequestCreateContentType {
  YoutubeVideo = "youtubeVideo",
  Instagram = "instagram",
  Blog = "blog",
  Text = "text",
}

/**
 * Request Create Content Type (string literal type for flexibility)
 */
export type TRequestCreateContentType = `${ERequestCreateContentType}`;

/**
 * 
 */
export type TRequestCreateContentData = {
  youtubeVideo?: {
    videoId?: string;
  },
  instagram?: {
    instagramPostUrl: string;
    description: string | null;
    tags: string[];
    userId: string | null;
    userProfileUrl: string | null;
    postDate: string | null;
  },
  blog?: {
    blogPostUrl: string;
    title: string | null;
    content: string | null;
    tags: string[];
    platform: string | null;
    platformUrl: string | null;
    publishedDate: string | null;
  },
  text?: {
    content: string;
    title: string | null;
  },
}

/**
 * Request Create Content
 */
export type TRequestCreateContent = {
  type: TRequestCreateContentType;
  data: TRequestCreateContentData;
};


/**
 * Request Processing Status Enum
 */
export enum EProcessingStatusType {
  pending = "pending", 
  processing = "processing", 
  completed = "completed", 
  failed = "failed"
}