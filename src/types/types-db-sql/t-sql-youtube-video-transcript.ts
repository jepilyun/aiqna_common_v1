/*
 * DB 컬럼 목록 For Youtube Video Processing Log
 */
export type TSqlYoutubeVideoTranscript = {
  id: string;
  video_id: string;
  language: string;
  total_duration: number | null;
  segment_count: number;
  segments_storage_path: string | null;
  segments_file_size: number | null;
  created_at: string;
  updated_at: string;
};

/*
 * DB 컬럼 목록 For Youtube Video Transcript
 */
export type TSqlYoutubeVideoTranscriptInsert = {
  video_id: string;
  language?: string; // 기본값 'ko'
  total_duration?: number; // 초 단위
  segment_count?: number;
  segments_storage_path?: string; // 저장 경로
  segments_file_size?: number; // 파일 크기
};

/*
 * DB 컬럼 목록 For Youtube Video Transcript
 */
export type TSqlYoutubeVideoTranscriptUpdate = {
  video_id: string;
} & Partial<Omit<TSqlYoutubeVideoTranscript, "video_id">>;
