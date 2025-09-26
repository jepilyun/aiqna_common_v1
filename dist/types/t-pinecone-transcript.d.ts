/**
 * Pinecone 비디오 메타데이터 타입
 */
export type TPinconeVideoMetadata = {
    video_id: string;
    video_title: string;
    channel_name: string;
    text: string;
    text_length: number;
    start_time: number;
    end_time: number;
    duration: number;
    chunk_index: number;
    chunk_id: string;
    category?: string;
    language: string;
    created_at: string;
    embedding_model: string;
};
/**
 * Pinecone 벡터 전체 구조
 */
export type TPinconeTranscriptVector = {
    id: string;
    values: number[];
    metadata: TPinconeVideoMetadata;
};
