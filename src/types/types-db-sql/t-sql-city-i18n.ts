/*
 * DB 컬럼 목록 For City I18n
 */
export type TSqlCityI18n = {
  city_code: string;
  lang_code: string;
  name_i18n: string;
  description_i18n: string | null;
  created_at: string;
  updated_at: string;
};

/*
 * DB 컬럼 목록 For Related I18n Insert
 */
export type TSqlCityI18nInsert = {
  city_code: string;
  lang_code: string;
  name_i18n: string;
} & Partial<Omit<TSqlCityI18n, "city_code" | "lang_code" | "name_i18n">>;

/*
 * DB 컬럼 목록 For City I18n Update
 */
export type TSqlCityI18nUpdate = {
  city_code: string;
  lang_code: string;
} & Partial<Omit<TSqlCityI18n, "city_code" | "lang_code">>;
