export type TSqlContentI18n = {
    content_code: string;
    lang_code: string;
    name_i18n: string;
    description_i18n: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlContentI18nInsert = {
    content_code: string;
    lang_code: string;
    name_i18n: string;
} & Partial<Omit<TSqlContentI18n, "content_code" | "lang_code" | "name_i18n">>;
export type TSqlContentI18nUpdate = {
    content_code: string;
    lang_code: string;
} & Partial<Omit<TSqlContentI18n, "content_code" | "lang_code">>;
