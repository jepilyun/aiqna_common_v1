/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
export type TSqlYoutubeVideoProcessingLog = {
  id: string;
  video_id: string;
  processing_status: string;
  error_message: string | null;
  index_name: string;
  is_api_data_fetched: boolean;
  is_transcript_fetched: boolean;
  is_pinecone_processed: boolean;
  processing_started: string | null;
  processing_completed: string | null;
  retry_count: number;
  created_at: string;
  updated_at: string;
  last_processed_at: string | null;
};

/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
export type TSqlYoutubeVideoProcessingLogInsert = {
  video_id: string;
  processing_status: string;
} & Partial<Omit<TSqlYoutubeVideoProcessingLog, "video_id" | "processing_status">>;

/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
export type TSqlYoutubeVideoProcessingLogUpdate = {
  video_id: string;
} & Partial<Omit<TSqlYoutubeVideoProcessingLog, "video_id">>;

