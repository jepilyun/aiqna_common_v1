export type TSqlCategoryI18n = {
    category_code: string;
    lang_code: string;
    name_i18n: string;
    description_i18n: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlCategoryI18nInsert = {
    category_code: string;
    lang_code: string;
    name_i18n: string;
} & Partial<Omit<TSqlCategoryI18n, "category_code" | "lang_code" | "name_i18n">>;
export type TSqlCategoryI18nUpdate = Partial<Omit<TSqlCategoryI18n, "category_code" | "lang_code">>;
