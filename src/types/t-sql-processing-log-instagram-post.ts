/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
export type TSqlProcessingLogInstagramPost = {
  instagram_post_url: string;
  processing_status: string;
  error_message: string | null;
  index_name: string | null;
  is_data_fetched: boolean;
  is_pinecone_processed: boolean;
  processing_started: string | null;
  processing_completed: string | null;
  retry_count: number;
  created_at: string;
  updated_at: string;
  last_processed_at: string | null;
  source?: string | null;
  priority: number;
  assigned_worker: string | null;
};

/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
export type TSqlProcessingLogInstagramPostInsert = {
  instagram_post_url: string;
} & Partial<Omit<TSqlProcessingLogInstagramPost, 'instagram_post_url'>>;

/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
// Update 타입
export type TSqlProcessingLogInstagramPostUpdate = {
  instagram_post_url: string;
} & Partial<Omit<TSqlProcessingLogInstagramPost, 'instagram_post_url'>>;
