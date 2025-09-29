/**
 * YouTube 자막의 개별 세그먼트 (시간 구간별 텍스트)
 */
export type TPineconeYouTubeTranscriptSegment = {
  text: string;        // 해당 구간의 자막 텍스트
  start: number;       // 시작 시간 (초 단위)
  duration: number;    // 지속 시간 (초 단위)
}

/**
 * YouTube 비디오의 전체 자막 데이터
 */
export type TPineconeFullYouTubeTranscript = {
  videoId: string;                           // YouTube 비디오 ID
  language: string;                          // 자막 언어 코드 (예: 'ko', 'en')
  segments: TPineconeYouTubeTranscriptSegment[];    // 시간별 자막 세그먼트 배열
}

/**
 * YouTube 비디오의 기본 메타데이터
 */
export type TPineconeYouTubeVideoMetadata = {
  video_id: string;         // YouTube 비디오 ID
  title: string;            // 비디오 제목
  channel_id?: string;      // 채널 ID
  channel_title?: string;   // 채널 이름
  published_at?: string;    // 게시 날짜 (ISO 8601 형식)
  thumbnail_url?: string;   // 썸네일 이미지 URL
  duration?: string;        // 비디오 길이 (ISO 8601 duration 형식, 예: PT1M30S = 1분 30초)
  view_count?: number;      // 조회수
  like_count?: number;      // 좋아요 수
}

/**
 * Pinecone에 저장될 자막 청크의 메타데이터
 * - 비디오 정보 + 자막 청크 관련 정보를 모두 포함
 */
export type TPineconeYouTubeTranscriptMetadata = TPineconeYouTubeVideoMetadata & {
  language: string;           // 자막 언어 코드
  chunk_index: number;        // 청크 인덱스 (0부터 시작)
  chunk_id: string;           // 고유 청크 ID (형식: {video_id}_chunk_{chunk_index})
  start_time: number;         // 청크 시작 시간 (초 단위)
  end_time: number;           // 청크 종료 시간 (초 단위)
  text: string;               // 청크의 실제 자막 텍스트 (여러 세그먼트를 합친 것)
  text_length: number;        // 텍스트 길이 (문자 수)
  embedding_model: string;    // 임베딩 생성에 사용된 모델명 (예: 'text-embedding-3-small')
  categories?: string[];      // 카테고리 목록
  keywords?: string[];        // 키워드 목록
  locations?: string[];       // 위치 목록
  names?: string[];           // 이름 목록
  created_at: string;         // 데이터 생성 시각 (ISO 8601 형식)
}

/**
 * Pinecone에 삽입할 벡터 데이터 구조
 * - Pinecone의 표준 upsert 포맷
 */
export type TPineconeYouTubeTranscriptInsertVector = {
  id: string;                                        // 벡터 고유 ID (chunk_id와 동일)
  values: number[];                                  // 임베딩 벡터 값 배열 (차원: 모델에 따라 다름, 보통 1536)
  metadata: TPineconeYouTubeTranscriptMetadata;     // 검색 및 필터링용 메타데이터
}