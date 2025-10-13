/*
 * DB 컬럼 목록 For Category I18n
 */
export type TSqlCategoryI18n = {
  category_code: string;
  lang_code: string;
  name_i18n: string;
  description_i18n: string | null;
  created_at: string;
  updated_at: string;
};

/*
 * DB 컬럼 목록 For Related I18n Insert
 */
export type TSqlCategoryI18nInsert = {
  category_code: string;
  lang_code: string;
  name_i18n: string;
} & Partial<Omit<TSqlCategoryI18n, "category_code" | "lang_code" | "name_i18n">>;

/*
 * DB 컬럼 목록 For Category I18n Update
 */
export type TSqlCategoryI18nUpdate = {
  category_code: string;
  lang_code: string;
} & Partial<Omit<TSqlCategoryI18n, "category_code" | "lang_code">>;
