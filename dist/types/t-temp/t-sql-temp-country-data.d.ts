export type TSqlTempCountryData = {
    id: number;
    country_name: string;
    source_type: string;
    source_id: string;
    country_code: string | null;
    admin_message: string | null;
    is_processed: boolean;
    processed_at: string;
    created_at: string;
    updated_at: string;
};
