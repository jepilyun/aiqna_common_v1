import { TYouTubeTranscriptSegment } from "./t-youtube-transcript";

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
  language?: string; // 기본값 'ko'
  total_duration?: number; // 초 단위
  segment_count?: number;
  segments_json: TYouTubeTranscriptSegment[]; // JSONB로 저장
  full_text?: string; // 전체 텍스트
};

/*
 * DB 컬럼 목록 For Youtube Video Transcript
 */
export type TSqlYoutubeVideoTranscriptUpdate = {
  video_id: string;
} & Partial<Omit<TSqlYoutubeVideoTranscript, "video_id">>;
