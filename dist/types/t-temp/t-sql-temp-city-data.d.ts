export type TSqlTempCityData = {
    id: number;
    city_name: string;
    source_type: string;
    source_id: string;
    city_code: string | null;
    admin_message: string | null;
    is_processed: boolean;
    processed_at: string | null;
    created_at: string;
    updated_at: string;
};
