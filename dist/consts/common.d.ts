/**
 * 리스트 조회 기본 제한 개수
 */
export declare const LIST_LIMIT: {
    start: number;
    default: number;
    n30: number;
    n50: number;
    n100: number;
    n200: number;
};
/**
 * 쿠키 이름
 */
export declare const COOKIE_NAME: {
    access_token_admin: string;
    refresh_token_admin: string;
    access_token_user: string;
    refresh_token_user: string;
};
/**
 * 기본 값 목록
 */
export declare const DEFAULT_VALUES: {
    AA_country: string;
    KR_country: string;
    index_seoul: number;
    code_city_seoul: string;
    upper_category_none: string;
    language: string;
    NONE: string;
    not_selected: string;
    AA_category: string;
};
export type TProcessingStatus = "pending" | "processing" | "completed" | "failed";
export type TSupportedLanguage = "ko" | "en" | "ja" | "zh-hans" | "zh-hant" | "es" | "fr" | "de";
export declare const PINECONE_INDEX_NAME: {
    readonly YOUTUBE_TRANSCRIPT_TRAVEL_SEOUL: {
        readonly OPENAI_SMALL: "youtube-transcript-travel-seoul-openai-small";
        readonly COHERE_MULTI: "youtube-transcript-travel-seoul-cohere-multi";
        readonly VOYAGE_LARGE_2: "youtube-transcript-travel-seoul-voyage-large-2";
        readonly HF_KOREAN: "youtube-transcript-travel-seoul-hf-korean";
    };
    readonly YOUTUBE_TRANSCRIPT_TRAVEL_BUSAN: {
        readonly OPENAI_SMALL: "youtube-transcript-travel-busan-openai-small";
        readonly COHERE_MULTI: "youtube-transcript-travel-busan-cohere-multi";
        readonly VOYAGE_LARGE_2: "youtube-transcript-travel-busan-voyage-large-2";
        readonly HF_KOREAN: "youtube-transcript-travel-busan-hf-korean";
    };
    readonly YOUTUBE_TRANSCRIPT_TRAVEL_JEJU: {
        readonly OPENAI_SMALL: "youtube-transcript-travel-jeju-openai-small";
        readonly COHERE_MULTI: "youtube-transcript-travel-jeju-cohere-multi";
        readonly VOYAGE_LARGE_2: "youtube-transcript-travel-jeju-voyage-large-2";
        readonly HF_KOREAN: "youtube-transcript-travel-jeju-hf-korean";
    };
};
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
export type EmbeddingProviderType = 'openai' | 'cohere' | 'voyage' | 'huggingface' | 'gemini';
export type PineconeIndexName = typeof PINECONE_INDEX_NAME[keyof typeof PINECONE_INDEX_NAME][keyof typeof PINECONE_INDEX_NAME['YOUTUBE_TRANSCRIPT_TRAVEL_SEOUL']];
