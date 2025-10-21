/*
 * DB 컬럼 목록 For Youtube Video List
 */
export const SQL_DB_COLUMNS_TEXT_LIST = [
    "id",
    "hash_key",
    "title",
    "created_at",
    "updated_at",
    "last_processed_at",
    "is_active",
    "is_deleted",
];
/*
 * DB 컬럼 목록 For Youtube Video Detail
 */
export const SQL_DB_COLUMNS_TEXT_DETAIL = [
    ...SQL_DB_COLUMNS_TEXT_LIST,
    "content",
    "info_country",
    "info_city",
    "info_district",
    "info_neighborhood",
    "info_landmark",
    "info_category",
    "info_name",
    "info_special_tag",
    "info_influencer",
    "info_season",
    "info_time_of_day",
    "info_activity_type",
    "info_reservation_required",
    "info_travel_tips",
    "metadata_json",
    "deleted_at",
];
//# sourceMappingURL=t-sql-text.js.map