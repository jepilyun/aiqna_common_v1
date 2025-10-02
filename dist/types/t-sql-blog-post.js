/*
 * DB 컬럼 목록 For Youtube Video List
 */
export const SQL_DB_COLUMNS_BLOG_POST_LIST = [
    "id",
    "blog_post_url",
    "title",
    "platform",
    "platform_url",
    "published_date",
    "created_at",
    "updated_at",
    "last_processed_at",
    "is_active",
    "is_deleted",
];
/*
 * DB 컬럼 목록 For Youtube Video Detail
 */
export const SQL_DB_COLUMNS_BLOG_POST_DETAIL = [
    ...SQL_DB_COLUMNS_BLOG_POST_LIST,
    "featured_image_url",
    "content",
    "tags",
    "metadata_json",
    "deleted_at",
];
//# sourceMappingURL=t-sql-blog-post.js.map