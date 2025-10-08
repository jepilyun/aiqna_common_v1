/*
 * DB 컬럼 목록 For Text Processing Log
 */
export type TSqlTextProcessingLog = {
  id: string;
  hash_key: string;
  processing_status: string;
  error_message: string | null;
  index_name: string;
  is_pinecone_processed: boolean;
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
export type TSqlTextProcessingLogInsert = {
  hash_key: string;
} & Partial<Omit<TSqlTextProcessingLog, "hash_key">>;

/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
export type TSqlTextProcessingLogUpdate = {
  id?: string;
  hash_key?: string;
} & Partial<Omit<TSqlTextProcessingLog, "id" | "hash_key">>;

