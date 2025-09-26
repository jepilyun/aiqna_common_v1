import { TSupportedLanguage } from "../consts/common";
/**
 * 텍스트 실행 단위를 나타내는 인터페이스
 * YouTube 트랜스크립트에서 개별 텍스트 조각을 표현
 *
 * @example
 * { text: "Hello world" }
 * { text: "안녕하세요" }
 */
export type TYouTubeTranscriptTextRun = {
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
    runs?: TYouTubeTranscriptTextRun[];
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
    runs?: TYouTubeTranscriptTextRun[];
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
    runs?: TYouTubeTranscriptTextRun[];
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
 * // TTranscriptSegment 형식
 * const segment1: TAnySegment = {
 *   transcript_segment_renderer: {
 *     snippet: { text: "Hello" },
 *     start_ms: "0",
 *     end_ms: "1000"
 *   }
 * };
 *
 * // TGenericSegment 형식
 * const segment2: TAnySegment = {
 *   text: "Simple text",
 *   start_ms: "1000",
 *   end_ms: "2000"
 * };
 */
export type TYouTubeTranscriptAnySegment = TYouTubeTranscriptSegment | TYouTubeTranscriptCueGroupSegment | TYouTubeTranscriptGenericSegment;
/**
 * 처리된 트랜스크립트 세그먼트 (우리 시스템용)
 * - 중복되던 TProcessedTranscriptSegment 통합
 * - offset → start_time으로 명명 일관성 개선
 * - YouTube API의 다양한 형식을 통일된 형식으로 변환한 결과
 *
 * @example
 * {
 *   text: "안녕하세요, 오늘의 주제는 AI입니다",
 *   start_time: 0.0,      // 영상 시작 0초
 *   end_time: 3.5,        // 3.5초에 끝남
 *   duration: 3.5,        // 3.5초 동안 표시
 *   segment_index: 0      // 첫 번째 세그먼트
 * }
 *
 * {
 *   text: "AI는 우리 삶을 변화시키고 있습니다",
 *   start_time: 3.5,
 *   end_time: 7.2,
 *   duration: 3.7,
 *   segment_index: 1
 * }
 */
export type TProcessedYouTubeTranscriptSegment = {
    text: string;
    start_time: number;
    end_time: number;
    duration: number;
    segment_index: number;
};
/**
 * 전체 트랜스크립트 데이터
 * 비디오의 완전한 자막 정보를 담는 컨테이너
 *
 * @example
 * {
 *   video_id: "dQw4w9WgXcQ",
 *   video_title: "Rick Astley - Never Gonna Give You Up",
 *   language: "en",
 *   segments: [
 *     {
 *       text: "We're no strangers to love",
 *       start_time: 0.0,
 *       end_time: 2.5,
 *       duration: 2.5,
 *       segment_index: 0
 *     },
 *     {
 *       text: "You know the rules and so do I",
 *       start_time: 2.5,
 *       end_time: 5.0,
 *       duration: 2.5,
 *       segment_index: 1
 *     }
 *     // ... 더 많은 세그먼트
 *   ],
 *   total_duration: 213.5,  // 3분 33초
 *   segment_count: 85,       // 총 85개 세그먼트
 *   created_at: "2025-09-27T10:30:00Z"
 * }
 */
export type TYouTubeTranscriptData = {
    video_id: string;
    video_title: string;
    language: string;
    segments: TProcessedYouTubeTranscriptSegment[];
    total_duration: number;
    segment_count: number;
    created_at: string;
};
/**
 * API 응답용 트랜스크립트 타입
 * 클라이언트에게 전달하는 형식 (camelCase 사용)
 *
 * @example
 * // GET /api/transcript?videoId=dQw4w9WgXcQ 응답
 * {
 *   videoId: "dQw4w9WgXcQ",
 *   videoTitle: "Rick Astley - Never Gonna Give You Up",
 *   language: "en",
 *   transcript: [
 *     {
 *       text: "We're no strangers to love",
 *       start_time: 0.0,
 *       end_time: 2.5,
 *       duration: 2.5,
 *       segment_index: 0
 *     }
 *     // ...
 *   ],
 *   totalDuration: 213.5,
 *   segmentCount: 85
 * }
 */
export type TYouTubeTranscriptResponse = {
    videoId: string;
    videoTitle: string;
    language?: string;
    transcript: TProcessedYouTubeTranscriptSegment[];
    totalDuration?: number;
    segmentCount?: number;
};
/**
 * 트랜스크립트 처리 옵션
 * 긴 트랜스크립트를 의미 있는 청크로 나누는 설정
 *
 * @example
 * // 기본 설정 - 30초 청크, 5초 겹침
 * {
 *   language: "ko",
 *   chunkSize: 30,      // 30초 단위로 나눔
 *   overlapSize: 5,     // 이전 청크와 5초 겹침 (문맥 유지)
 *   minChunkLength: 100, // 최소 100자
 *   maxChunkLength: 500  // 최대 500자
 * }
 *
 * // 짧은 청크 설정 (더 세밀한 검색용)
 * {
 *   language: "en",
 *   chunkSize: 15,
 *   overlapSize: 3,
 *   minChunkLength: 50,
 *   maxChunkLength: 300
 * }
 *
 * // 실제 청크 결과 예시:
 * // Chunk 1 (0-30초): "안녕하세요 오늘은... [25초 분량]"
 * // Chunk 2 (25-55초): "[5초 겹침]... 주제를 다룹니다 [25초 분량]"
 * // Chunk 3 (50-80초): "[5초 겹침]... 계속됩니다 [25초 분량]"
 */
export type TYouTubeTranscriptProcessingOptions = {
    language?: TSupportedLanguage;
    chunkSize?: number;
    overlapSize?: number;
    minChunkLength?: number;
    maxChunkLength?: number;
};
/**
 * 임베딩 생성 옵션
 * OpenAI API를 사용한 텍스트 임베딩 벡터 생성 설정
 *
 * @example
 * // 기본 설정
 * {
 *   model: "text-embedding-ada-002",
 *   batchSize: 100,    // 한 번에 100개씩 처리
 *   retryCount: 3,     // 실패 시 3번까지 재시도
 *   retryDelay: 1000   // 재시도 간 1초 대기
 * }
 *
 * // 대용량 처리용 설정
 * {
 *   model: "text-embedding-3-small",
 *   batchSize: 200,    // 더 큰 배치
 *   retryCount: 5,     // 더 많은 재시도
 *   retryDelay: 2000   // 더 긴 대기시간
 * }
 *
 * // 사용 시나리오:
 * // 1. 트랜스크립트 청크들을 임베딩으로 변환
 * // 2. 벡터 DB에 저장
 * // 3. 의미론적 검색 가능
 * // 예: "AI 윤리"로 검색 → 관련 청크들 반환
 */
export type TYouTubeTranscriptEmbeddingOptions = {
    model: string;
    batchSize?: number;
    retryCount?: number;
    retryDelay?: number;
};
