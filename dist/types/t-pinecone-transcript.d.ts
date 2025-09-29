/**
 * YouTube 자막의 개별 세그먼트 (시간 구간별 텍스트)
 */
export type TPineconeYouTubeTranscriptSegment = {
    text: string;
    start: number;
    duration: number;
};
/**
 * YouTube 비디오의 전체 자막 데이터
 */
export type TPineconeFullYouTubeTranscript = {
    videoId: string;
    language: string;
    segments: TPineconeYouTubeTranscriptSegment[];
};
/**
 * YouTube 비디오의 기본 메타데이터
 */
export type TPineconeYouTubeVideoMetadata = {
    video_id: string;
    title: string;
    channel_id?: string;
    channel_title?: string;
    published_at?: string;
    thumbnail_url?: string;
    duration?: string;
    view_count?: number;
    like_count?: number;
};
/**
 * Pinecone에 저장될 자막 청크의 메타데이터
 * - 비디오 정보 + 자막 청크 관련 정보를 모두 포함
 */
export type TPineconeYouTubeTranscriptMetadata = TPineconeYouTubeVideoMetadata & {
    language: string;
    chunk_index: number;
    chunk_id: string;
    start_time: number;
    end_time: number;
    text: string;
    text_length: number;
    embedding_model: string;
    categories?: string[];
    keywords?: string[];
    locations?: string[];
    names?: string[];
    created_at: string;
};
/**
 * Pinecone에 삽입할 벡터 데이터 구조
 * - Pinecone의 표준 upsert 포맷
 */
export type TPineconeYouTubeTranscriptInsertVector = {
    id: string;
    values: number[];
    metadata: TPineconeYouTubeTranscriptMetadata;
};
