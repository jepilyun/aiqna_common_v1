// ============================================================
// Supported Languages
// ============================================================

/**
 * 지원 언어 정보 (코드, 영문명, 원어명)
 */
export const SUPPORTED_LANGUAGES = {
  ko: { lang_code: "ko", lang_name: "Korean", native_name: "한국어" },
  en: { lang_code: "en", lang_name: "English", native_name: "English" },
  ja: { lang_code: "ja", lang_name: "Japanese", native_name: "日本語" },
  "zh-hans": { lang_code: "zh-hans", lang_name: "Chinese (Simplified)", native_name: "简体中文" },
  "zh-hant": { lang_code: "zh-hant", lang_name: "Chinese (Traditional)", native_name: "繁體中文" },
  es: { lang_code: "es", lang_name: "Spanish", native_name: "Español" },
  fr: { lang_code: "fr", lang_name: "French", native_name: "Français" },
  de: { lang_code: "de", lang_name: "German", native_name: "Deutsch" },
  id: { lang_code: "id", lang_name: "Indonesian", native_name: "Bahasa Indonesia" },
  th: { lang_code: "th", lang_name: "Thai", native_name: "ไทย" },
  vi: { lang_code: "vi", lang_name: "Vietnamese", native_name: "Tiếng Việt" },
} as const;

/**
 * 지원 언어 코드 타입
 */
export type TSupportedLangCode = keyof typeof SUPPORTED_LANGUAGES;

/**
 * 지원 언어 영문명 타입
 */
export type TSupportedLangName =
  (typeof SUPPORTED_LANGUAGES)[TSupportedLangCode]["lang_name"];

/**
 * 지원 언어 코드 배열
 */
export const SUPPORTED_LANGUAGE_CODES = Object.keys(
  SUPPORTED_LANGUAGES
) as TSupportedLangCode[];

// ============================================================
// Supported Countries
// ============================================================

/**
 * 지원 국가 정보 (코드, 영문명, 원어명, 주요 언어)
 */
export const SUPPORTED_COUNTRIES = {
  // Global
  AA: {
    country_code: "AA",
    country_name: "GLOBAL",
    native_name: "GLOBAL",
    primary_lang_code: "en" as TSupportedLangCode,
  },

  // East Asia
  KR: {
    country_code: "KR",
    country_name: "South Korea",
    native_name: "대한민국",
    primary_lang_code: "ko" as TSupportedLangCode,
  },
  JP: {
    country_code: "JP",
    country_name: "Japan",
    native_name: "日本",
    primary_lang_code: "ja" as TSupportedLangCode,
  },
  CN: {
    country_code: "CN",
    country_name: "China",
    native_name: "中国",
    primary_lang_code: "zh-hans" as TSupportedLangCode,
  },
  TW: {
    country_code: "TW",
    country_name: "Taiwan",
    native_name: "臺灣",
    primary_lang_code: "zh-hant" as TSupportedLangCode,
  },
  HK: {
    country_code: "HK",
    country_name: "Hong Kong S.A.R.",
    native_name: "香港",
    primary_lang_code: "zh-hant" as TSupportedLangCode,
  },
  MO: {
    country_code: "MO",
    country_name: "Macau S.A.R.",
    native_name: "澳門",
    primary_lang_code: "zh-hant" as TSupportedLangCode,
  },

  // Southeast Asia
  TH: {
    country_code: "TH",
    country_name: "Thailand",
    native_name: "ประเทศไทย",
    primary_lang_code: "th" as TSupportedLangCode,
  },
  VN: {
    country_code: "VN",
    country_name: "Vietnam",
    native_name: "Việt Nam",
    primary_lang_code: "vi" as TSupportedLangCode,
  },
  SG: {
    country_code: "SG",
    country_name: "Singapore",
    native_name: "Singapore",
    primary_lang_code: "en" as TSupportedLangCode,
  },
  ID: {
    country_code: "ID",
    country_name: "Indonesia",
    native_name: "Indonesia",
    primary_lang_code: "id" as TSupportedLangCode,
  },

  // North America
  US: {
    country_code: "US",
    country_name: "United States",
    native_name: "United States",
    primary_lang_code: "en" as TSupportedLangCode,
  },
} as const;

/**
 * 지원 국가 코드 타입
 */
export type TSupportedCountryCode = keyof typeof SUPPORTED_COUNTRIES;

/**
 * 지원 국가 영문명 타입
 */
export type TSupportedCountryName =
  (typeof SUPPORTED_COUNTRIES)[TSupportedCountryCode]["country_name"];

/**
 * 지원 국가 코드 배열
 */
export const SUPPORTED_COUNTRY_CODES = Object.keys(
  SUPPORTED_COUNTRIES
) as TSupportedCountryCode[];