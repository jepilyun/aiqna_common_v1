/*
 * DB 컬럼 목록 For Text Processing Log
 */
export type TSqlProcessingLogText = {
  id: number;
  hash_key: string;
  processing_status: string;
  index_name: string | null;
  is_pinecone_processed: boolean;
  is_error_occurred: boolean;
  error_message: string | null;
  processing_started: string | null;
  processing_completed: string | null;
  retry_count: number;
  created_at: string;
  updated_at: string;
  last_processed_at: string | null;
  source: string | null;
  priority: number;
  assigned_worker: string | null;
};

/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
export type TSqlProcessingLogTextInsert = {
  hash_key: string;
} & Partial<Omit<TSqlProcessingLogText, "hash_key" | "id">>;

/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
export type TSqlProcessingLogTextUpdate = Partial<Omit<TSqlProcessingLogText, "hash_key" | "id">>;

