/*
 * DB 컬럼 목록 For Pinecone Processing Log
 */
export type TSqlPineconeProcessingLog = {
  id: string;
  video_id: string;
  index_name: string;
  chunk_count: number;
  processing_status: string | null;
  error_message: string | null;
  started_at: string | null;
  completed_at: string | null;
  processing_duration_seconds: number;
  created_at: string;
};

/*
 * DB 컬럼 목록 For Pinecone Processing Log
 */
export type TSqlPineconeProcessingLogInsert = {
  video_id: string;
  index_name: string;
  processing_status: string;
} & Partial<Omit<TSqlPineconeProcessingLog, "video_id" | "index_name" | "processing_status">>;

/*
 * DB 컬럼 목록 For Pinecone Processing Log
 */
export type TSqlPineconeProcessingLogUpdate = {
  video_id: string;
} & Partial<Omit<TSqlPineconeProcessingLog, "video_id">>;

