export type TSqlDistrictI18n = {
    district_code: string;
    lang_code: string;
    name_i18n: string;
    description_i18n?: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlDistrictI18nInsert = {
    district_code: string;
    lang_code: string;
    name_i18n: string;
} & Partial<Omit<TSqlDistrictI18n, "district_code" | "lang_code" | "name_i18n">>;
export type TSqlDistrictI18nUpdate = Omit<TSqlDistrictI18n, "district_code" | "lang_code">;
