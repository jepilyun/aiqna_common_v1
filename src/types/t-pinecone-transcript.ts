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
