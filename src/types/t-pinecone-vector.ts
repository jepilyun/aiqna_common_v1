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

export type TPineconeVectorMetadataBase = {
  type?: string;
  id?: string;
  language: string;           // 자막 언어 코드
  chunk_index: number;        // 청크 인덱스 (0부터 시작)
  chunk_id: string;           // 고유 청크 ID (형식: {video_id}_chunk_{chunk_index})
  content?: string;               // 청크의 실제 자막 텍스트 (여러 세그먼트를 합친 것)
  text_length?: number;        // 텍스트 길이 (문자 수)
  embedding_model: string;    // 임베딩 생성에 사용된 모델명 (예: 'text-embedding-3-small')
  categories: (
    | "cafe" | "restaurant" | "shopping" | "palace" | "history"
    | "museum" | "exhibition" | "themepark" | "activity" | "experience"
    | "festival" | "market" | "park" | "tour"
  )[];
  // 위치
  countries: string[];     // 국가명 (예: "대한민국")
  cities: string[];        // 도시명 (예: "서울")
  districts: string[];     // 구/시/군 (예: "종로구")
  neighborhoods: string[]; // 동/지명 (예: "안국", "북촌", "서촌", "광화문")
  landmarks: string[];     // 랜드마크 (예: "남산", "한강")
  // 이름/태그/키워드
  venues: string[];        // 업체/매장/장소명 (예: "스타벅스", "ONION")
  special_tags: string[];  // BTS, BLACKPINK, 제니, 케이팝데몬헌터스, ...
  names: string[];         // 사람/브랜드/제품명
  keywords: string[];      // 예약필수, 대기, 브런치, 로맨틱, 가족추천 등
  tips: string[];          // 꿀팁: 짧은 문장/구 (예: "오픈런 추천", "평일 오후 한산")
  main_topics?: string[];
  key_points?: string[];
  confidence_score: number; // 0.0 ~ 1.0

  ai_summary?: string;

  created_at: string;         // 데이터 생성 시각 (ISO 8601 형식)
};

export type TPineconeVectorMetadataForVideo = TPineconeVectorMetadataBase & {
  video_id?: string;         // YouTube 비디오 ID
  title?: string;            // 비디오 제목
  video_start_time?: number;         // 청크 시작 시간 (초 단위)
  video_end_time?: number;           // 청크 종료 시간 (초 단위)
  duration?: string;        // 비디오 길이 (ISO 8601 duration 형식, 예: PT1M30S = 1분 30초)
  channel_id?: string;      // 채널 ID
  channel_title?: string;   // 채널 이름
  published_date?: string;    // 게시 날짜 (ISO 8601 형식)
  thumbnail_url?: string;   // 썸네일 이미지 URL
  view_count?: number;      // 조회수
  like_count?: number;      // 좋아요 수
};

export type TPineconeVectorMetadataForInstagramPost = TPineconeVectorMetadataBase & {
  instagram_post_url?: string;   // Instagram 게시물 URL
  instagram_user_id?: string;   // Instagram 사용자 ID
  instagram_user_profile_url?: string;   // Instagram 사용자 프로필 URL
  published_date?: string;   // Blog 게시 날짜 (ISO 8601 형식)
  local_image_url?: string;   // Instagram 로컬 이미지 URL
}

export type TPineconeVectorMetadataForBlogPost = TPineconeVectorMetadataBase & {
  title?: string;            // Blog 제목
  image?: string;   // Blog 이미지
  blog_post_url?: string;   // Blog 게시물 URL
  published_date?: string;   // Blog 게시 날짜 (ISO 8601 형식)
  local_image_url?: string;   // Instagram 로컬 이미지 URL
  tags?: string[];   // Blog 태그
  blog_platform?: string;   // Blog 플랫폼
  blog_platform_url?: string;   // Blog 플랫폼 URL
}

export type TPineconeVectorMetadataForText = TPineconeVectorMetadataBase & {
  hash_key: string;
}
