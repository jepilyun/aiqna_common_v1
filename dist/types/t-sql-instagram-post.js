/*
 * DB 컬럼 목록 For Youtube Video List
 */
export const SQL_DB_COLUMNS_INSTAGRAM_POST_LIST = [
    "id",
    "instagram_post_url",
    "post_type",
    "media_count",
    "og_title",
    "like_count",
    "comment_count",
    "view_count",
    "user_id",
    "user_name",
    "published_date",
    "location_name",
    "created_at",
    "updated_at",
    "last_processed_at",
    "is_active",
    "is_deleted",
];
/*
 * DB 컬럼 목록 For Youtube Video Detail
 */
export const SQL_DB_COLUMNS_INSTAGRAM_POST_DETAIL = [
    ...SQL_DB_COLUMNS_INSTAGRAM_POST_LIST,
    "media_urls",
    "og_description",
    "og_image",
    "og_url",
    "og_ios_url",
    "og_android_package",
    "og_android_url",
    "content",
    "tags",
    "user_profile_url",
    "local_image_url",
    "location_id",
    "latitude",
    "longitude",
    "metadata_json",
    "deleted_at",
];
//# sourceMappingURL=t-sql-instagram-post.js.map