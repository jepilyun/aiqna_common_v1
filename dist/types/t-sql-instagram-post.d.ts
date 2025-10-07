export type TSqlInstagramPostList = {
    id: string;
    instagram_post_url: string;
    post_type: string;
    media_count: number;
    og_title: string | null;
    like_count: number;
    comment_count: number;
    view_count: number;
    user_id: string | null;
    user_name: string | null;
    published_date: string | null;
    location_name: string | null;
    created_at: string;
    updated_at: string;
    last_processed_at: string | null;
    is_active: boolean;
    is_deleted: boolean;
};
export type TSqlInstagramPostDetail = TSqlInstagramPostList & {
    media_urls: string[];
    og_description: string | null;
    og_image: string | null;
    og_url: string | null;
    og_ios_url: string | null;
    og_android_package: string | null;
    og_android_url: string | null;
    description: string | null;
    tags: string[];
    user_profile_url: string | null;
    local_image_url: string | null;
    location_id: string | null;
    latitude: string | null;
    longitude: string | null;
    metadata_json: string | null;
    deleted_at: string | null;
};
export type TSqlInstagramPostDetailInsert = {
    instagram_post_url: string;
} & Partial<Omit<TSqlInstagramPostDetail, "instagram_post_url">>;
export type TSqlInstagramPostDetailUpdate = {
    id?: string;
    instagram_post_url?: string;
} & Partial<Omit<TSqlInstagramPostDetail, "id" | "instagram_post_url">>;
export declare const SQL_DB_COLUMNS_INSTAGRAM_POST_LIST: string[];
export declare const SQL_DB_COLUMNS_INSTAGRAM_POST_DETAIL: string[];
