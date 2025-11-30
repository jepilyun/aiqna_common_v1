/*
 * DB 컬럼 목록 For Influencer I18n
 */
export type TSqlInfluencerI18n = {
  influencer_id: number;
  lang_code: string;
  name_i18n: string;
  description_i18n?: string | null;
  created_at: string;
  updated_at: string;
};

/*
 * DB 컬럼 목록 For Related I18n Insert
 */
export type TSqlInfluencerI18nInsert = {
  influencer_id: number;
  lang_code: string;
  name_i18n: string;
} & Partial<Omit<TSqlInfluencerI18n, "influencer_id" | "lang_code" | "name_i18n">>;

/*
 * DB 컬럼 목록 For Landmark I18n Update
 */
export type TSqlInfluencerI18nUpdate = Partial<Omit<TSqlInfluencerI18n, "influencer_id" | "lang_code">>;
