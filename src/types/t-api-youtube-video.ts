/**
 * YouTube 비디오 기본 정보 (snippet)
 * 비디오의 메타데이터와 썸네일 정보
 * 
 * @example
 * {
 *   publishedAt: "2024-03-15T10:30:00Z",
 *   channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
 *   title: "TypeScript 완벽 가이드",
 *   description: "TypeScript를 처음부터 끝까지 배워봅시다...",
 *   thumbnails: {
 *     default: { 
 *       url: "https://i.ytimg.com/vi/VIDEO_ID/default.jpg",
 *       width: 120,
 *       height: 90
 *     },
 *     medium: {
 *       url: "https://i.ytimg.com/vi/VIDEO_ID/mqdefault.jpg",
 *       width: 320,
 *       height: 180
 *     },
 *     high: {
 *       url: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
 *       width: 480,
 *       height: 360
 *     },
 *     standard: {
 *       url: "https://i.ytimg.com/vi/VIDEO_ID/sddefault.jpg",
 *       width: 640,
 *       height: 480
 *     },
 *     maxres: {
 *       url: "https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg",
 *       width: 1280,
 *       height: 720
 *     }
 *   },
 *   channelTitle: "코딩 강의 채널",
 *   tags: ["typescript", "javascript", "programming", "tutorial"],
 *   categoryId: "28", // 28 = Science & Technology
 *   liveBroadcastContent: "none", // 일반 비디오
 *   localized: {
 *     title: "TypeScript 완벽 가이드",
 *     description: "TypeScript를 처음부터 끝까지 배워봅시다..."
 *   },
 *   defaultAudioLanguage: "ko"
 * }
 * 
 * // 라이브 스트림 예시
 * {
 *   ...
 *   liveBroadcastContent: "live", // 현재 라이브 중
 *   ...
 * }
 * 
 * // 예정된 프리미어 예시
 * {
 *   ...
 *   liveBroadcastContent: "upcoming", // 예정됨
 *   ...
 * }
 */
export type TApiYoutubeVideoSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
    standard?: { url: string; width: number; height: number };
    maxres?: { url: string; width: number; height: number };
  };
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: "none" | "live" | "upcoming";
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage?: string;
};

/**
 * YouTube 비디오 통계 정보
 * 조회수, 좋아요 수 등의 지표 (모두 문자열로 반환됨)
 * 
 * @example
 * {
 *   viewCount: "1523847",      // 152만 조회
 *   likeCount: "45231",        // 4.5만 좋아요
 *   favoriteCount: "0",        // 항상 "0" (deprecated)
 *   commentCount: "3847"       // 3,847개 댓글
 * }
 * 
 * // 인기 비디오 예시
 * {
 *   viewCount: "15000000",
 *   likeCount: "850000",
 *   favoriteCount: "0",
 *   commentCount: "125000"
 * }
 * 
 * // 주의: 모든 값이 문자열 타입
 * const views = parseInt(statistics.viewCount); // 숫자 변환 필요
 */
export type TApiYoutubeVideoStatistics = {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
};

/**
 * YouTube 비디오 상세 정보 (개별 아이템)
 * API 응답의 items 배열에 포함되는 단일 비디오 객체
 * 
 * @example
 * {
 *   kind: "youtube#video",
 *   etag: "XI7nbFXulYBIpL0ayR_gDh3eu1k",
 *   id: "dQw4w9WgXcQ",
 *   snippet: {
 *     publishedAt: "2009-10-25T06:57:33Z",
 *     channelId: "UCuAXFkgsw1L7xaCfnd5JJOw",
 *     title: "Rick Astley - Never Gonna Give You Up",
 *     description: "The official video for "Never Gonna Give You Up"...",
 *     thumbnails: { ... },
 *     channelTitle: "Rick Astley",
 *     tags: ["rick astley", "Never Gonna Give You Up", "..."],
 *     categoryId: "10", // Music
 *     liveBroadcastContent: "none",
 *     localized: { ... },
 *     defaultAudioLanguage: "en"
 *   },
 *   contentDetails: {
 *     duration: "PT3M33S",      // 3분 33초 (ISO 8601 형식)
 *     dimension: "2d",
 *     definition: "hd",
 *     caption: "false",         // 자막 없음
 *     licensedContent: true,
 *     projection: "rectangular" // 일반 비디오
 *   },
 *   status: {
 *     uploadStatus: "processed",
 *     privacyStatus: "public",
 *     license: "youtube",
 *     embeddable: true,
 *     publicStatsViewable: true
 *   },
 *   statistics: {
 *     viewCount: "1500000000",  // 15억 조회
 *     likeCount: "15000000",
 *     favoriteCount: "0",
 *     commentCount: "2500000"
 *   },
 *   topicDetails: {
 *     topicIds: ["/m/064t9", "/m/0glt670"], // Music 관련 토픽
 *     relevantTopicIds: ["/m/04rlf"]        // 관련 토픽
 *   }
 * }
 * 
 * // 360도 VR 비디오 예시
 * {
 *   ...
 *   contentDetails: {
 *     duration: "PT5M20S",
 *     dimension: "2d",
 *     definition: "hd",
 *     caption: "true",
 *     licensedContent: false,
 *     projection: "360"         // 360도 비디오
 *   },
 *   ...
 * }
 * 
 * // 비공개 비디오 예시
 * {
 *   ...
 *   status: {
 *     uploadStatus: "processed",
 *     privacyStatus: "private", // 비공개
 *     license: "youtube",
 *     embeddable: false,
 *     publicStatsViewable: false
 *   },
 *   ...
 * }
 */
export type TApiYoutubeVideoItem = {
  kind: string; // "youtube#video"
  etag: string;
  id: string; // videoId
  snippet: TApiYoutubeVideoSnippet;
  contentDetails: {
    duration: string; // ISO 8601 (PT3M33S = 3분 33초)
    dimension: string; // "2d" | "3d"
    definition: "sd" | "hd";
    caption: "true" | "false";
    licensedContent: boolean;
    projection: "rectangular" | "360";
  };
  status: {
    uploadStatus: string;
    privacyStatus: "public" | "unlisted" | "private";
    license: string;
    embeddable: boolean;
    publicStatsViewable: boolean;
  };
  statistics: TApiYoutubeVideoStatistics;
  topicDetails?: {
    topicIds?: string[];
    relevantTopicIds?: string[];
  };
};

/**
 * YouTube Data API v3 비디오 목록 응답
 * videos.list 엔드포인트의 전체 응답 구조
 * 
 * @example
 * // GET https://www.googleapis.com/youtube/v3/videos?id=dQw4w9WgXcQ&part=snippet,contentDetails,statistics
 * {
 *   kind: "youtube#videoListResponse",
 *   etag: "XI7nbFXulYBIpL0ayR_gDh3eu1k",
 *   pageInfo: {
 *     totalResults: 1,
 *     resultsPerPage: 1
 *   },
 *   items: [
 *     {
 *       kind: "youtube#video",
 *       etag: "...",
 *       id: "dQw4w9WgXcQ",
 *       snippet: { ... },
 *       contentDetails: { ... },
 *       status: { ... },
 *       statistics: { ... }
 *     }
 *   ]
 * }
 * 
 * // 여러 비디오 조회 예시
 * // GET .../videos?id=VIDEO_ID1,VIDEO_ID2,VIDEO_ID3&part=snippet,statistics
 * {
 *   kind: "youtube#videoListResponse",
 *   etag: "...",
 *   pageInfo: {
 *     totalResults: 3,
 *     resultsPerPage: 3
 *   },
 *   items: [
 *     { id: "VIDEO_ID1", ... },
 *     { id: "VIDEO_ID2", ... },
 *     { id: "VIDEO_ID3", ... }
 *   ]
 * }
 * 
 * // 비디오를 찾지 못한 경우
 * {
 *   kind: "youtube#videoListResponse",
 *   etag: "...",
 *   pageInfo: {
 *     totalResults: 0,
 *     resultsPerPage: 0
 *   },
 *   items: [] // 빈 배열
 * }
 * 
 * // 사용 예시:
 * const response: TApiYoutubeVideoListResponse = await fetchVideoDetails(videoId);
 * 
 * if (response.items.length === 0) {
 *   console.log('비디오를 찾을 수 없습니다');
 * } else {
 *   const video = response.items[0];
 *   console.log(`제목: ${video.snippet.title}`);
 *   console.log(`조회수: ${parseInt(video.statistics.viewCount).toLocaleString()}`);
 *   console.log(`길이: ${video.contentDetails.duration}`); // PT3M33S
 * }
 */
export type TApiYoutubeVideoListResponse = {
  kind: string; // "youtube#videoListResponse"
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: TApiYoutubeVideoItem[];
};