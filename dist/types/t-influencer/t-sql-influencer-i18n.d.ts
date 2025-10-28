export type TSqlInfluencerI18n = {
    influencer_id: number;
    lang_code: string;
    name_i18n: string;
    description_i18n?: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlInfluencerI18nInsert = {
    influencer_id: number;
    lang_code: string;
    name_i18n: string;
} & Partial<Omit<TSqlInfluencerI18n, "influencer_id" | "lang_code" | "name_i18n">>;
export type TSqlInfluencerI18nUpdate = Omit<TSqlInfluencerI18n, "influencer_id" | "lang_code">;
