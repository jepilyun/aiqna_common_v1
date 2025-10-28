export type TSqlStagI18n = {
    stag_code: string;
    lang_code: string;
    name_i18n: string;
    description_i18n?: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlStagI18nInsert = {
    stag_code: string;
    lang_code: string;
    name_i18n: string;
} & Partial<Omit<TSqlStagI18n, "stag_code" | "lang_code" | "name_i18n">>;
export type TSqlStagI18nUpdate = Omit<TSqlStagI18n, "stag_code" | "lang_code">;
