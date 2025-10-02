/**
 * YouTube 자막의 개별 세그먼트 (시간 구간별 텍스트)
 */
export type TPineconeYouTubeTranscriptSegment = {
    text: string;
    start: number;
    duration: number;
};
/**
 * YouTube 비디오의 전체 자막 데이터
 */
export type TPineconeFullYouTubeTranscript = {
    videoId: string;
    language: string;
    segments: TPineconeYouTubeTranscriptSegment[];
};
