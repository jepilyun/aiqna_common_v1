export type TSqlBlogPostList = {
    blog_post_url: string;
    title: string;
    platform: string;
    platform_url: string;
    published_date: string | null;
    created_at: string;
    updated_at: string;
    last_processed_at: string | null;
    is_active: boolean;
    is_deleted: boolean;
};
export type TSqlBlogPostDetail = TSqlBlogPostList & {
    content: string | null;
    tags: string[];
    og_title: string | null;
    og_description: string | null;
    og_image: string | null;
    og_url: string | null;
    local_image_url: string | null;
    metadata_json: string | null;
    deleted_at: string | null;
};
export type TSqlBlogPostDetailInsert = {
    blog_post_url: string;
} & Partial<Omit<TSqlBlogPostDetail, "blog_post_url">>;
export type TSqlBlogPostDetailUpdate = {
    blog_post_url: string;
} & Partial<Omit<TSqlBlogPostDetail, "blog_post_url">>;
export declare const SQL_DB_COLUMNS_BLOG_POST_LIST: string[];
export declare const SQL_DB_COLUMNS_BLOG_POST_DETAIL: string[];
