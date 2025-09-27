export type TPineconeTranscriptSegment = {
    text: string;
    start: number;
    duration: number;
};
export type TPineconeTranscriptData = {
    videoId: string;
    language: string;
    segments: TPineconeTranscriptSegment[];
};
export type TPineconeVideoMetadata = {
    video_id: string;
    title: string;
    channel_title?: string;
    channel_id?: string;
    published_at?: string;
    thumbnail_url?: string;
    duration?: string;
    view_count?: string;
    like_count?: string;
};
export type TPineconeChunkMetadata = TPineconeVideoMetadata & {
    language: string;
    chunk_index: number;
    chunk_id: string;
    start_time: number;
    end_time: number;
    text: string;
    text_length: number;
    embedding_model: string;
    created_at: string;
};
/**
 * Pinecone 벡터 전체 구조
 */
export type TPineconeTranscriptVector = {
    id: string;
    values: number[];
    metadata: TPineconeChunkMetadata;
};
