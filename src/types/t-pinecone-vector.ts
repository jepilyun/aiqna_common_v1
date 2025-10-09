// Pinecone 메타데이터 타입 정의
export type TPineconeMetadata = Record<string, string | number | boolean | string[]>;

/**
 * Pinecone 벡터 타입
 */
export type TPineconeVector = {
  id: string;
  values: number[];
  metadata?: TPineconeMetadata;
};

/**
 * Pinecone 쿼리 결과 타입
 */
export type TPineconeQueryResult = {
  id: string;
  score: number;
  values?: number[];
  metadata?: TPineconeMetadata;
};

/**
 * Pinecone에 저장될 자막 청크의 메타데이터
 * - 비디오 정보 + 자막 청크 관련 정보를 모두 포함
 */
export type TPineconeVectorMetadataForContent = {
  language: string;           // 자막 언어 코드
  chunk_index: number;        // 청크 인덱스 (0부터 시작)
  chunk_id: string;           // 고유 청크 ID (형식: {video_id}_chunk_{chunk_index})
  video_start_time?: number;         // 청크 시작 시간 (초 단위)
  video_end_time?: number;           // 청크 종료 시간 (초 단위)
  text?: string;               // 청크의 실제 자막 텍스트 (여러 세그먼트를 합친 것)
  text_length?: number;        // 텍스트 길이 (문자 수)
  embedding_model: string;    // 임베딩 생성에 사용된 모델명 (예: 'text-embedding-3-small')
  categories?: string[];      // 카테고리 목록
  locations?: string[];       // 위치 목록
  names?: string[];           // 이름 목록
  created_at: string;         // 데이터 생성 시각 (ISO 8601 형식)
  video_id?: string;         // YouTube 비디오 ID
  title?: string;            // 비디오 제목
  channel_id?: string;      // 채널 ID
  channel_title?: string;   // 채널 이름
  published_date?: string;    // 게시 날짜 (ISO 8601 형식)
  thumbnail_url?: string;   // 썸네일 이미지 URL
  duration?: string;        // 비디오 길이 (ISO 8601 duration 형식, 예: PT1M30S = 1분 30초)
  view_count?: number;      // 조회수
  like_count?: number;      // 좋아요 수
  type?: string;
  id?: string;
  instagram_post_url?: string;   // Instagram 게시물 URL
  instagram_local_image_url?: string;   // Instagram 로컬 이미지 URL
  instagram_user_id?: string;   // Instagram 사용자 ID
  instagram_user_profile_url?: string;   // Instagram 사용자 프로필 URL
  instagram_post_date?: string;   // Instagram 게시 날짜 (ISO 8601 형식)
  blog_post_url?: string;   // Blog 게시물 URL
  blog_title?: string;   // Blog 제목
  blog_content?: string;   // Blog 내용
  blog_image?: string;   // Blog 이미지
  blog_published_date?: string;   // Blog 게시 날짜 (ISO 8601 형식)
  blog_local_image_url?: string;   // Blog 로컬 이미지 URL
  blog_tags?: string[];   // Blog 태그
  blog_platform?: string;   // Blog 플랫폼
  blog_platform_url?: string;   // Blog 플랫폼 URL
  hash_key?: string;
  content?: string;
  ai_summary?: string;
  main_topics?: string[];
  key_points?: string[];
  keywords?: string[];
}