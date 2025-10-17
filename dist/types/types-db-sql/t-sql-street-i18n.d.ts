export type TSqlStreetI18n = {
    street_code: string;
    lang_code: string;
    name_i18n: string;
    description_i18n: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlStreetI18nInsert = {
    street_code: string;
    lang_code: string;
    name_i18n: string;
} & Partial<Omit<TSqlStreetI18n, "street_code" | "lang_code" | "name_i18n">>;
export type TSqlStreetI18nUpdate = {
    street_code: string;
    lang_code: string;
} & Partial<Omit<TSqlStreetI18n, "street_code" | "lang_code">>;
