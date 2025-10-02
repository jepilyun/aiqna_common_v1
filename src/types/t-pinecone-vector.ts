import { TPineconeVectorMetadata } from "./t-pinecone-metadata.js";

/**
 * Pinecone에 삽입할 벡터 데이터 구조
 * - Pinecone의 표준 upsert 포맷
 */
export type TPineconeYouTubeTranscriptInsertVector = {
  id: string;                                        // 벡터 고유 ID (chunk_id와 동일)
  values: number[];                                  // 임베딩 벡터 값 배열 (차원: 모델에 따라 다름, 보통 1536)
  metadata: TPineconeVectorMetadata;     // 검색 및 필터링용 메타데이터
}