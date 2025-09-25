export type TLanguage = {
    lang_code: string;
    lang_name: string;
    native: string;
    user_count: number;
};
export type TCountry = {
    country_code: string;
    country_name: string;
    native: string;
    video_count: number;
};
export type TCountryLanguage = {
    country_lang_code: string;
    country_code: string;
    lang_code: string;
};
