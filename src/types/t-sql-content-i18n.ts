/*
 * DB 컬럼 목록 For Content I18n
 */
export type TSqlContentI18n = {
  content_code: string;
  lang_code: string;
  name_i18n: string;
  description_i18n: string | null;
  created_at: string;
  updated_at: string;
};

/*
 * DB 컬럼 목록 For Related I18n Insert
 */
export type TSqlContentI18nInsert = {
  content_code: string;
  lang_code: string;
  name_i18n: string;
} & Partial<Omit<TSqlContentI18n, "content_code" | "lang_code" | "name_i18n">>;

/*
 * DB 컬럼 목록 For Content I18n Update
 */
export type TSqlContentI18nUpdate = {
  content_code: string;
  lang_code: string;
} & Partial<Omit<TSqlContentI18n, "content_code" | "lang_code">>;
