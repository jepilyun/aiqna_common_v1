export type TSqlMapCity = {
    city_code: string;
    source_type: string;
    source_id: string;
    confidence_score: number | null;
    extracted_at: string | null;
    extraction_method: string | null;
    is_verified: boolean;
    verified_at: string | null;
    verified_by: string | null;
    is_selected: boolean;
    order_num: number;
    added_at: string;
    updated_at: string;
};
export type TSqlMapCityInsert = {
    city_code: string;
} & Partial<Omit<TSqlMapCity, "city_code">>;
export type TSqlMapCityUpdate = {
    city_code: string;
} & Partial<Omit<TSqlMapCity, "city_code">>;
