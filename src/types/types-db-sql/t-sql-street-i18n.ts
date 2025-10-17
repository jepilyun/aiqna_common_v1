/*
 * DB 컬럼 목록 For Street I18n
 */
export type TSqlStreetI18n = {
  street_code: string;
  lang_code: string;
  name_i18n: string;
  description_i18n: string | null;
  created_at: string;
  updated_at: string;
};

/*
 * DB 컬럼 목록 For Related I18n Insert
 */
export type TSqlStreetI18nInsert = {
  street_code: string;
  lang_code: string;
  name_i18n: string;
} & Partial<Omit<TSqlStreetI18n, "street_code" | "lang_code" | "name_i18n">>;

/*
 * DB 컬럼 목록 For Street I18n Update
 */
export type TSqlStreetI18nUpdate = {
  street_code: string;
  lang_code: string;
} & Partial<Omit<TSqlStreetI18n, "street_code" | "lang_code">>;
