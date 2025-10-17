export {};
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
//# sourceMappingURL=t-api-youtube-error.js.map