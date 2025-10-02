/**
 * Pinecone에 저장될 자막 청크의 메타데이터
 * - 비디오 정보 + 자막 청크 관련 정보를 모두 포함
 */
export type TPineconeVectorMetadata = {
    language: string;
    chunk_index: number;
    chunk_id: string;
    video_start_time?: number;
    video_end_time?: number;
    text?: string;
    text_length?: number;
    embedding_model: string;
    categories?: string[];
    keywords?: string[];
    locations?: string[];
    names?: string[];
    created_at: string;
    video_id?: string;
    title?: string;
    channel_id?: string;
    channel_title?: string;
    published_date?: string;
    thumbnail_url?: string;
    duration?: string;
    view_count?: number;
    like_count?: number;
    type?: string;
    id?: string;
    instagram_post_url?: string;
    blog_post_url?: string;
    hash_key?: string;
};
