export type TSqlTempGooglePlaceData = {
    id: string;
    place_name: string;
    city_name: string;
    source_type: string;
    source_id: string;
    google_place_id: string | null;
    admin_message: string | null;
    is_processed: boolean;
    processed_at: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlTempGooglePlaceDataInsert = {
    id?: string | null;
} & Partial<Omit<TSqlTempGooglePlaceData, "id">>;
export type TSqlTempGooglePlaceDataUpdate = Omit<TSqlTempGooglePlaceData, "id">;
