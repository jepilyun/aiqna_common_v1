export type TSqlNeighborhoodI18n = {
    neighborhood_id: number;
    lang_code: string;
    name_i18n: string;
    description_i18n?: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlNeighborhoodI18nInsert = {
    neighborhood_id: number;
    lang_code: string;
    name_i18n: string;
} & Partial<Omit<TSqlNeighborhoodI18n, "neighborhood_id" | "lang_code" | "name_i18n">>;
export type TSqlNeighborhoodI18nUpdate = Omit<TSqlNeighborhoodI18n, "neighborhood_id" | "lang_code">;
