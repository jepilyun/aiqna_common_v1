/**
 * YouTube API 에러 상세 정보
 * API 요청 실패 시 구체적인 원인을 담는 객체
 *
 * @example
 * // API 키 누락 에러
 * {
 *   reason: "required",
 *   domain: "global",
 *   message: "The request is missing a valid API key."
 * }
 *
 * // 할당량 초과 에러
 * {
 *   reason: "quotaExceeded",
 *   domain: "youtube.quota",
 *   message: "The request cannot be completed because you have exceeded your quota."
 * }
 *
 * // 잘못된 파라미터 에러
 * {
 *   reason: "invalidParameter",
 *   domain: "global",
 *   location: "videoId",
 *   locationType: "parameter",
 *   message: "The video ID is malformed."
 * }
 */
export type TYouTubeApiErrorDetails = {
    reason?: string;
    domain?: string;
    location?: string;
    locationType?: string;
    message?: string;
    [key: string]: string | number | boolean | undefined;
};
/**
 * YouTube Data API v3 표준 에러 응답 구조
 *
 * @example
 * // 전체 에러 응답 구조
 * {
 *   error: {
 *     code: 403,
 *     message: "The request is missing a valid API key.",
 *     errors: [
 *       {
 *         domain: "global",
 *         reason: "required",
 *         message: "The request is missing a valid API key."
 *       }
 *     ],
 *     status: "PERMISSION_DENIED"
 *   }
 * }
 *
 * // 할당량 초과 에러
 * {
 *   error: {
 *     code: 429,
 *     message: "Quota exceeded for quota metric.",
 *     errors: [
 *       {
 *         domain: "youtube.quota",
 *         reason: "quotaExceeded",
 *         message: "The request cannot be completed because you have exceeded your quota."
 *       }
 *     ],
 *     status: "RESOURCE_EXHAUSTED"
 *   }
 * }
 *
 * // 비디오를 찾을 수 없는 에러
 * {
 *   error: {
 *     code: 404,
 *     message: "The video was not found.",
 *     errors: [
 *       {
 *         domain: "youtube.video",
 *         reason: "videoNotFound",
 *         message: "The video was not found.",
 *         location: "videoId",
 *         locationType: "parameter"
 *       }
 *     ],
 *     status: "NOT_FOUND"
 *   }
 * }
 */
export type TYouTubeApiErrorResponse = {
    error: {
        code: number;
        message: string;
        errors: TYouTubeApiErrorDetails[];
        status: string;
        details?: Record<string, unknown>;
    };
};
/**
 * YouTube API 에러 타입 (내부 처리용)
 * API 응답을 간소화한 형태
 *
 * @example
 * // TYouTubeApiErrorResponse를 변환한 형태
 * {
 *   code: "PERMISSION_DENIED",
 *   message: "The request is missing a valid API key.",
 *   details: {
 *     httpCode: 403,
 *     reason: "required",
 *     domain: "global"
 *   }
 * }
 *
 * // 사용 예시:
 * try {
 *   const transcript = await getYouTubeTranscript(videoId);
 * } catch (error) {
 *   const apiError = error as TYouTubeApiError;
 *
 *   if (apiError.code === 'PERMISSION_DENIED') {
 *     console.error('API 키 문제:', apiError.message);
 *   } else if (apiError.code === 'NOT_FOUND') {
 *     console.error('비디오 없음:', apiError.message);
 *   } else if (apiError.code === 'RESOURCE_EXHAUSTED') {
 *     console.error('할당량 초과:', apiError.message);
 *   }
 * }
 */
export type TYouTubeApiError = {
    code: string;
    message: string;
    details?: Record<string, unknown>;
};
/**
 * YouTube API 일반적인 에러 코드 및 처리 가이드
 *
 * HTTP Code | Status              | Reason            | 의미
 * ----------|---------------------|-------------------|----------------------------------
 * 400       | INVALID_ARGUMENT    | invalidParameter  | 잘못된 파라미터
 * 401       | UNAUTHENTICATED     | authError         | 인증 실패
 * 403       | PERMISSION_DENIED   | required          | API 키 누락/권한 없음
 * 403       | PERMISSION_DENIED   | forbidden         | 접근 금지
 * 404       | NOT_FOUND           | videoNotFound     | 비디오 없음
 * 429       | RESOURCE_EXHAUSTED  | quotaExceeded     | 할당량 초과
 * 500       | INTERNAL            | backendError      | 서버 내부 오류
 * 503       | UNAVAILABLE         | serviceUnavailable| 서비스 일시 중단
 */ 
