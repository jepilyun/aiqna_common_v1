/*
 * DB 컬럼 목록 For District I18n
 */
export type TSqlDistrictI18n = {
  district_code: string;
  lang_code: string;
  name_i18n: string;
  description_i18n?: string | null;
  created_at: string;
  updated_at: string;
};

/*
 * DB 컬럼 목록 For Related I18n Insert
 */
export type TSqlDistrictI18nInsert = {
  district_code: string;
  lang_code: string;
  name_i18n: string;
} & Partial<Omit<TSqlDistrictI18n, "district_code" | "lang_code" | "name_i18n">>;

/*
 * DB 컬럼 목록 For District I18n Update
 */
export type TSqlDistrictI18nUpdate = Partial<Omit<TSqlDistrictI18n, "district_code" | "lang_code">>;
