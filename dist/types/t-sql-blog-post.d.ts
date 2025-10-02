export type TSqlBlogPostList = {
    id: string;
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
    featured_image_url: string;
    content: string;
    tags: string[];
    metadata_json: string | null;
    deleted_at: string | null;
};
export type TSqlBlogPostDetailInsert = {
    blog_post_url: string;
} & Partial<Omit<TSqlBlogPostDetail, "blog_post_url">>;
export type TSqlBlogPostDetailUpdate = {
    id?: string;
    blog_post_url?: string;
} & Partial<Omit<TSqlBlogPostDetail, "id" | "blog_post_url">>;
export declare const SQL_DB_COLUMNS_BLOG_POST_LIST: string[];
export declare const SQL_DB_COLUMNS_BLOG_POST_DETAIL: string[];
