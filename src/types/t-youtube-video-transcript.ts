/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
export type TYoutubeVideoTranscript = {
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
export type TYoutubeVideoTranscriptInsert = {
  video_id: string;
  language: string;
} & Partial<Omit<TYoutubeVideoTranscript, "video_id" | "language">>;

/*
 * DB 컬럼 목록 For Youtube Video Transcript
 */
export type TYoutubeVideoTranscriptUpdate = {
  video_id: string;
} & Partial<Omit<TYoutubeVideoTranscript, "video_id">>;
