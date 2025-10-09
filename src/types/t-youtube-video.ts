
/**
 * YouTube 자막 요약 결과 타입
 */
export type TYouTubeVideoSummary = {
  summary: string;           // 3-5문장 전체 요약
  mainTopics: string[];      // 주요 주제 3-5개
  keyPoints: string[];       // 핵심 포인트 5-10개
  keywords: string[];        // 핵심 키워드 5-10개
}