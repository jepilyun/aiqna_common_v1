/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
export type TSqlYoutubeVideoTranscript = {
  id: string;
  video_id: string;
  language: string;
  total_duration: number | null;
  segment_count: number;
  segments_json: string | null;
  full_text: string | null;
  created_at: string;
  updated_at: string;
};

/*
 * DB 컬럼 목록 For Youtube Video Transcript
 */
export type TSqlYoutubeVideoTranscriptInsert = {
  video_id: string;
  language: string;
} & Partial<Omit<TSqlYoutubeVideoTranscript, "video_id" | "language">>;

/*
 * DB 컬럼 목록 For Youtube Video Transcript
 */
export type TSqlYoutubeVideoTranscriptUpdate = {
  video_id: string;
} & Partial<Omit<TSqlYoutubeVideoTranscript, "video_id">>;
