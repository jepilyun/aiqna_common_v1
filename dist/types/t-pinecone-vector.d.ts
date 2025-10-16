export type TPineconeMetadata = Record<string, string | number | boolean | string[]>;
/**
 * Pinecone 벡터 타입
 */
export type TPineconeVector = {
    id: string;
    values: number[];
    metadata?: TPineconeMetadata;
};
/**
 * Pinecone 쿼리 결과 타입
 */
export type TPineconeQueryResult = {
    id: string;
    score: number;
    values?: number[];
    metadata?: TPineconeMetadata;
};
export type TPineconeVectorMetadataBase = {
    type?: string;
    id?: string;
    language: string;
    chunk_index: number;
    chunk_id: string;
    content?: string;
    text_length?: number;
    embedding_model: string;
    categories: ("cafe" | "restaurant" | "shopping" | "palace" | "history" | "museum" | "exhibition" | "themepark" | "activity" | "experience" | "festival" | "market" | "park" | "tour")[];
    countries: string[];
    cities: string[];
    districts: string[];
    neighborhoods: string[];
    landmarks: string[];
    venues: string[];
    special_tags: string[];
    names: string[];
    keywords: string[];
    tips: string[];
    main_topics?: string[];
    key_points?: string[];
    confidence_score: number;
    ai_summary?: string;
    created_at: string;
};
export type TPineconeVectorMetadataForVideo = TPineconeVectorMetadataBase & {
    video_id?: string;
    title?: string;
    video_start_time?: number;
    video_end_time?: number;
    duration?: string;
    channel_id?: string;
    channel_title?: string;
    published_date?: string;
    thumbnail_url?: string;
    view_count?: number;
    like_count?: number;
};
export type TPineconeVectorMetadataForInstagramPost = TPineconeVectorMetadataBase & {
    instagram_post_url?: string;
    instagram_user_id?: string;
    instagram_user_profile_url?: string;
    published_date?: string;
    local_image_url?: string;
};
export type TPineconeVectorMetadataForBlogPost = TPineconeVectorMetadataBase & {
    title?: string;
    image?: string;
    blog_post_url?: string;
    published_date?: string;
    local_image_url?: string;
    tags?: string[];
    blog_platform?: string;
    blog_platform_url?: string;
};
export type TPineconeVectorMetadataForText = TPineconeVectorMetadataBase & {
    hash_key: string;
};
