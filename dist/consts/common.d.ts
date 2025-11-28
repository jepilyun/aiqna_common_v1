/**
 * 리스트 조회 기본 제한 개수
 */
export declare const LIST_LIMIT: {
    readonly start: 0;
    readonly default: 36;
    readonly n30: 30;
    readonly n50: 50;
    readonly n100: 100;
    readonly n200: 200;
};
/**
 * 쿠키 이름
 */
export declare const COOKIE_NAME: {
    readonly access_token_admin: "aiqna-access-token-admin";
    readonly refresh_token_admin: "aiqna-refresh-token-admin";
    readonly access_token_user: "aiqna-access-token";
    readonly refresh_token_user: "aiqna-refresh-token";
};
/**
 * 앱 전역 기본값
 */
export declare const DEFAULT_VALUES: {
    readonly COUNTRY: {
        readonly ALL: "AA";
        readonly KOREA: "KR";
    };
    readonly CITY: {
        readonly SEOUL_CODE: "seoul";
        readonly SEOUL_INDEX: 2;
    };
    readonly CATEGORY: {
        readonly ALL: "AA";
        readonly NONE: "NONE";
    };
    readonly LANGUAGE: "ko";
    readonly NOT_SELECTED: "NOT_SELECTED";
};
/**
 * 비동기 작업 처리 상태
 */
export declare const PROCESSING_STATUS: {
    readonly PENDING: "pending";
    readonly PROCESSING: "processing";
    readonly COMPLETED: "completed";
    readonly FAILED: "failed";
};
export type ProcessingStatus = (typeof PROCESSING_STATUS)[keyof typeof PROCESSING_STATUS];
/**
 * Pinecone 인덱스 이름
 * 패턴: {도메인}-{도시}-{임베딩모델}
 */
export declare const VECTOR_DB_INDEX: {
    readonly TRAVEL_SEOUL: {
        readonly OPENAI_SMALL: "travel-seoul-openai-small";
        readonly COHERE_MULTI: "travel-seoul-cohere-multi";
        readonly VOYAGE_LARGE_2: "travel-seoul-voyage-large-2";
        readonly HF_KOREAN: "travel-seoul-hf-korean";
    };
    readonly TRAVEL_BUSAN: {
        readonly OPENAI_SMALL: "travel-busan-openai-small";
        readonly COHERE_MULTI: "travel-busan-cohere-multi";
        readonly VOYAGE_LARGE_2: "travel-busan-voyage-large-2";
        readonly HF_KOREAN: "travel-busan-hf-korean";
    };
    readonly TRAVEL_JEJU: {
        readonly OPENAI_SMALL: "travel-jeju-openai-small";
        readonly COHERE_MULTI: "travel-jeju-cohere-multi";
        readonly VOYAGE_LARGE_2: "travel-jeju-voyage-large-2";
        readonly HF_KOREAN: "travel-jeju-hf-korean";
    };
};
/**
 * 임베딩 모델 ID
 * @see https://platform.openai.com/docs/guides/embeddings
 * @see https://docs.cohere.com/docs/models#embed
 * @see https://docs.voyageai.com/docs/embeddings
 */
export declare const EMBEDDING_MODEL: {
    readonly OPENAI: {
        readonly SMALL: "text-embedding-3-small";
        readonly MEDIUM: "text-embedding-3-medium";
        readonly LARGE: "text-embedding-3-large";
    };
    readonly COHERE: {
        readonly MULTI: "embed-multilingual-v3.0";
    };
    readonly VOYAGE: {
        readonly LARGE_2: "voyage-large-2";
    };
    readonly HUGGINGFACE: {
        readonly KO_SROBERTA_MULTITASK: "jhgan/ko-sroberta-multitask";
    };
    readonly GEMINI: {
        readonly BASE: "text-embedding-004";
        readonly LARGE: "text-embedding-004-large";
    };
};
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
