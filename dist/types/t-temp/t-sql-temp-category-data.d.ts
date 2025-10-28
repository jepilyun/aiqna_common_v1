export type TSqlTempCategoryData = {
    id: string;
    category_name: string;
    source_type: string;
    source_id: string;
    category_code: string | null;
    admin_message: string | null;
    is_processed: boolean;
    processed_at: string | null;
    created_at: string;
    updated_at: string;
};
export type TSqlTempCategoryDataInsert = {
    category_name: string;
} & Partial<Omit<TSqlTempCategoryData, "category_name">>;
export type TSqlTempCategoryDataUpdate = Partial<Omit<TSqlTempCategoryData, "id">>;
