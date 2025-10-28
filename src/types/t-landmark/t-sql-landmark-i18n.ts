/*
 * DB 컬럼 목록 For Landmark I18n
 */
export type TSqlLandmarkI18n = {
  landmark_id: number;
  lang_code: string;
  name_i18n: string;
  description_i18n?: string | null;
  created_at: string;
  updated_at: string;
};

/*
 * DB 컬럼 목록 For Related I18n Insert
 */
export type TSqlLandmarkI18nInsert = {
  landmark_id: number;
  lang_code: string;
  name_i18n: string;
} & Partial<Omit<TSqlLandmarkI18n, "landmark_id" | "lang_code" | "name_i18n">>;

/*
 * DB 컬럼 목록 For Landmark I18n Update
 */
export type TSqlLandmarkI18nUpdate = Partial<Omit<TSqlLandmarkI18n, "landmark_id" | "lang_code">>;
