/**
 * 지원 언어 정보 (코드와 이름 포함)
 */
export declare const SUPPORTED_LANGUAGES: {
    readonly ko: {
        readonly lang_code: "ko";
        readonly lang_name: "Korean";
        readonly native_name: "한국어";
    };
    readonly en: {
        readonly lang_code: "en";
        readonly lang_name: "English";
        readonly native_name: "English";
    };
    readonly ja: {
        readonly lang_code: "ja";
        readonly lang_name: "Japanese";
        readonly native_name: "日本語";
    };
    readonly "zh-hans": {
        readonly lang_code: "zh-hans";
        readonly lang_name: "Chinese (Simplified)";
        readonly native_name: "简体中文";
    };
    readonly "zh-hant": {
        readonly lang_code: "zh-hant";
        readonly lang_name: "Chinese (Traditional)";
        readonly native_name: "繁體中文";
    };
    readonly es: {
        readonly lang_code: "es";
        readonly lang_name: "Spanish";
        readonly native_name: "Español";
    };
    readonly fr: {
        readonly lang_code: "fr";
        readonly lang_name: "French";
        readonly native_name: "Français";
    };
    readonly de: {
        readonly lang_code: "de";
        readonly lang_name: "German";
        readonly native_name: "Deutsch";
    };
    readonly id: {
        readonly lang_code: "id";
        readonly lang_name: "Indonesian";
        readonly native_name: "Bahasa Indonesia";
    };
    readonly th: {
        readonly lang_code: "th";
        readonly lang_name: "Thai";
        readonly native_name: "ไทย";
    };
    readonly vi: {
        readonly lang_code: "vi";
        readonly lang_name: "Vietnamese";
        readonly native_name: "Tiếng Việt";
    };
};
/**
 * 지원 언어 코드 목록 (배열)
 */
export declare const SUPPORTED_LANGUAGE_CODES: TSupportedLangCode[];
/**
 * 지원 언어 코드 타입
 */
export type TSupportedLangCode = keyof typeof SUPPORTED_LANGUAGES;
/**
 * 지원 언어 이름 타입
 */
export type TSupportedLangName = typeof SUPPORTED_LANGUAGES[keyof typeof SUPPORTED_LANGUAGES]["lang_name"];
/**
 * 지원 국가 정보 (코드, 이름, 주요 언어 포함)
 */
export declare const SUPPORTED_COUNTRIES: {
    readonly AA: {
        readonly country_code: "AA";
        readonly country_name: "GLOBAL";
        readonly native_name: "GLOBAL";
        readonly primary_lang_code: TSupportedLangCode;
    };
    readonly KR: {
        readonly country_code: "KR";
        readonly country_name: "South Korea";
        readonly native_name: "대한민국";
        readonly primary_lang_code: TSupportedLangCode;
    };
    readonly JP: {
        readonly country_code: "JP";
        readonly country_name: "Japan";
        readonly native_name: "日本";
        readonly primary_lang_code: TSupportedLangCode;
    };
    readonly TH: {
        readonly country_code: "TH";
        readonly country_name: "Thailand";
        readonly native_name: "ประเทศไทย";
        readonly primary_lang_code: TSupportedLangCode;
    };
    readonly HK: {
        readonly country_code: "HK";
        readonly country_name: "Hong Kong S.A.R.";
        readonly native_name: "香港";
        readonly primary_lang_code: TSupportedLangCode;
    };
    readonly MO: {
        readonly country_code: "MO";
        readonly country_name: "Macau S.A.R.";
        readonly native_name: "澳門";
        readonly primary_lang_code: TSupportedLangCode;
    };
    readonly SG: {
        readonly country_code: "SG";
        readonly country_name: "Singapore";
        readonly native_name: "Singapore";
        readonly primary_lang_code: TSupportedLangCode;
    };
    readonly TW: {
        readonly country_code: "TW";
        readonly country_name: "Taiwan";
        readonly native_name: "臺灣";
        readonly primary_lang_code: TSupportedLangCode;
    };
    readonly CN: {
        readonly country_code: "CN";
        readonly country_name: "China";
        readonly native_name: "中国";
        readonly primary_lang_code: TSupportedLangCode;
    };
    readonly VN: {
        readonly country_code: "VN";
        readonly country_name: "Vietnam";
        readonly native_name: "Việt Nam";
        readonly primary_lang_code: TSupportedLangCode;
    };
    readonly ID: {
        readonly country_code: "ID";
        readonly country_name: "Indonesia";
        readonly native_name: "Indonesia";
        readonly primary_lang_code: TSupportedLangCode;
    };
    readonly US: {
        readonly country_code: "US";
        readonly country_name: "United States";
        readonly native_name: "United States";
        readonly primary_lang_code: TSupportedLangCode;
    };
};
/**
 * 지원 국가 코드 목록 (배열)
 */
export declare const SUPPORTED_COUNTRY_CODES: TSupportedCountryCode[];
/**
 * 지원 국가 코드 타입
 */
export type TSupportedCountryCode = keyof typeof SUPPORTED_COUNTRIES;
/**
 * 지원 국가 이름 타입
 */
export type TSupportedCountryName = typeof SUPPORTED_COUNTRIES[keyof typeof SUPPORTED_COUNTRIES]["country_name"];
