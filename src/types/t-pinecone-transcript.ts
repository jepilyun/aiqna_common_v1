// Transcript 타입 정의
export type TPineconeTranscriptSegment = {
  text: string;
  start: number;
  duration: number;
}

export type TPineconeTranscriptData = {
  videoId: string;
  language: string;
  segments: TPineconeTranscriptSegment[];
}

export type TPineconeVideoMetadata = {
  video_id: string;
  title: string;
  channel_title?: string;
  channel_id?: string;
  published_at?: string;
  thumbnail_url?: string;
  duration?: number;
  view_count?: number;
  like_count?: number;
}

export type TPineconeChunkMetadata = TPineconeVideoMetadata & {
  language: string;
  chunk_index: number;
  chunk_id: string;      // video_id + "_chunk_" + chunk_index
  start_time: number;
  end_time: number;
  text: string;
  text_length: number;
  embedding_model: string;
  created_at: string;
}

/**
 * Pinecone 벡터 전체 구조
 */
export type TPineconeTranscriptVector = {
  id: string;                    // chunk_id
  values: number[];              // 임베딩 벡터 (보통 1536차원)
  metadata: TPineconeChunkMetadata;
}