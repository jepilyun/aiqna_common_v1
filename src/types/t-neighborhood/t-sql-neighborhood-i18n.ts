/*
 * DB 컬럼 목록 For Neighborhood I18n
 */
export type TSqlNeighborhoodI18n = {
  neighborhood_id: number;
  lang_code: string;
  name_i18n: string;
  description_i18n?: string | null;
  created_at: string;
  updated_at: string;
};

/*
 * DB 컬럼 목록 For Related I18n Insert
 */
export type TSqlNeighborhoodI18nInsert = {
  neighborhood_id: number;
  lang_code: string;
  name_i18n: string;
} & Partial<Omit<TSqlNeighborhoodI18n, "neighborhood_id" | "lang_code" | "name_i18n">>;

/*
 * DB 컬럼 목록 For Neighborhood I18n Update
 */
export type TSqlNeighborhoodI18nUpdate = Partial<Omit<TSqlNeighborhoodI18n, "neighborhood_id" | "lang_code">>;
