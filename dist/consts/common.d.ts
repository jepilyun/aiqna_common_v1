/**
 * 리스트 조회 기본 제한 개수
 */
export declare const LIST_LIMIT: {
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
