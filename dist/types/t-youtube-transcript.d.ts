/**
 * 텍스트 실행 단위를 나타내는 인터페이스
 * YouTube 트랜스크립트에서 개별 텍스트 조각을 표현
 *
 * @example
 * { text: "Hello world" }
 * { text: "안녕하세요" }
 */
type TYouTubeTranscriptTextUnit = {
    text: string;
};
/**
 * 텍스트 스니펫을 나타내는 인터페이스
 * 단일 텍스트 또는 여러 TextRun들의 조합으로 구성
 *
 * @example
 * // 단순 텍스트
 * { text: "Welcome to my channel" }
 *
 * // 여러 스타일이 적용된 텍스트 (볼드, 이탤릭 등)
 * {
 *   runs: [
 *     { text: "This is " },
 *     { text: "important" },  // 볼드 처리
 *     { text: " text" }
 *   ]
 * }
 */
export type TYouTubeTranscriptSnippet = {
    text?: string;
    runs?: TYouTubeTranscriptTextUnit[];
};
/**
 * 일반적인 트랜스크립트 세그먼트 렌더러 인터페이스
 * YouTube의 표준 트랜스크립트 형식을 표현
 *
 * @example
 * {
 *   snippet: { text: "안녕하세요, 오늘은" },
 *   start_ms: "0",
 *   end_ms: "2000"
 * }
 *
 * // 또는 runs 형식
 * {
 *   runs: [{ text: "Welcome to the video" }],
 *   start_ms: "5000",
 *   end_ms: "7500"
 * }
 */
export type TYouTubeTranscriptSegmentRenderer = {
    snippet?: TYouTubeTranscriptSnippet;
    text?: string;
    runs?: TYouTubeTranscriptTextUnit[];
    start_ms?: string;
    end_ms?: string;
};
/**
 * 자막 렌더러를 나타내는 인터페이스
 * 개별 자막 항목의 구조를 정의
 *
 * @example
 * {
 *   text: { text: "구독과 좋아요 부탁드립니다" },
 *   start_offset_ms: "10000",
 *   duration_ms: "3000"
 * }
 *
 * // 0:10초에 시작해서 3초 동안 표시되는 자막
 */
export type TYouTubeTranscriptCueRenderer = {
    text?: TYouTubeTranscriptSnippet;
    start_offset_ms?: string;
    duration_ms?: string;
};
/**
 * 일반 세그먼트 인터페이스
 *
 * @example
 * {
 *   text: "This is a simple segment",
 *   start_ms: "1000",
 *   end_ms: "3000"
 * }
 */
export type TYouTubeTranscriptGenericSegment = {
    text?: string | TYouTubeTranscriptSnippet;
    runs?: TYouTubeTranscriptTextUnit[];
    snippet?: TYouTubeTranscriptSnippet;
    start_ms?: string;
    end_ms?: string;
    duration_ms?: string;
};
/**
 * 트랜스크립트 세그먼트 타입 (transcript_segment_renderer를 포함)
 *
 * @example
 * {
 *   transcript_segment_renderer: {
 *     snippet: { text: "오늘의 주제는" },
 *     start_ms: "15000",
 *     end_ms: "17000"
 *   }
 * }
 */
export type TYouTubeTranscriptSegment = {
    transcript_segment_renderer: TYouTubeTranscriptSegmentRenderer;
};
/**
 * 큐 그룹 세그먼트 타입 (cue_group_renderer를 포함)
 * 여러 자막을 그룹으로 묶은 형식
 *
 * @example
 * {
 *   cue_group_renderer: {
 *     cues: [
 *       {
 *         cue_renderer: {
 *           text: { text: "첫 번째 자막" },
 *           start_offset_ms: "0",
 *           duration_ms: "2000"
 *         }
 *       },
 *       {
 *         cue_renderer: {
 *           text: { text: "두 번째 자막" },
 *           start_offset_ms: "2000",
 *           duration_ms: "2000"
 *         }
 *       }
 *     ]
 *   }
 * }
 */
export type TYouTubeTranscriptCueGroupSegment = {
    cue_group_renderer: {
        cues?: {
            cue_renderer?: TYouTubeTranscriptCueRenderer;
        }[];
    };
};
/**
 * 가능한 모든 세그먼트 타입의 유니온
 * YouTube API가 반환할 수 있는 다양한 형식을 모두 포함
 *
 * @example
 * // TYouTubeTranscriptSegment 형식
 * const segment1: TAnySegment = {
 *   transcript_segment_renderer: {
 *     snippet: { text: "Hello" },
 *     start_ms: "0",
 *     end_ms: "1000"
 *   }
 * };
 *
 * // TYouTubeTranscriptGenericSegment 형식
 * const segment2: TAnySegment = {
 *   text: "Simple text",
 *   start_ms: "1000",
 *   end_ms: "2000"
 * };
 */
export type TYouTubeTranscriptAnySegment = TYouTubeTranscriptSegment | TYouTubeTranscriptCueGroupSegment | TYouTubeTranscriptGenericSegment;
export {};
