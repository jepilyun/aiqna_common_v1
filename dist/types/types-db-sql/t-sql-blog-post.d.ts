export type TSqlBlogPostList = {
    uuid_36: string;
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
    info_country: string[] | null;
    info_city: string[] | null;
    info_district: string[] | null;
    info_neighborhood: string[] | null;
    info_landmark: string[] | null;
    info_category: string[] | null;
    info_name: string[] | null;
    info_special_tag: string[] | null;
    info_influencer: string[] | null;
    info_season: string[] | null;
    info_time_of_day: string[] | null;
    info_activity_type: string[] | null;
    info_reservation_required: boolean;
    info_travel_tips: string[] | null;
    metadata_json: string | null;
    deleted_at: string | null;
};
export type TSqlBlogPostDetailInsert = {
    blog_post_url: string;
} & Partial<Omit<TSqlBlogPostDetail, "blog_post_url">>;
export type TSqlBlogPostDetailUpdate = {
    blog_post_url?: string;
    uuid_36?: string;
} & Partial<Omit<TSqlBlogPostDetail, "blog_post_url" | "uuid_36">>;
export declare const SQL_DB_COLUMNS_BLOG_POST_LIST: string[];
export declare const SQL_DB_COLUMNS_BLOG_POST_DETAIL: string[];
