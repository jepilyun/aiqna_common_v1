import { TPineconeVectorMetadata } from "./t-pinecone-metadata.js";
/**
 * Pinecone에 삽입할 벡터 데이터 구조
 * - Pinecone의 표준 upsert 포맷
 */
export type TPineconeYouTubeTranscriptInsertVector = {
    id: string;
    values: number[];
    metadata: TPineconeVectorMetadata;
};
