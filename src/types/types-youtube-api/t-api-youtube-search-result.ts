/**
 * YouTube 검색 결과 개별 아이템
 * 비디오, 채널, 재생목록 검색 결과를 표현
 * 
 * @example
 * // 비디오 검색 결과
 * {
 *   kind: "youtube#searchResult",
 *   etag: "XI7nbFXulYBIpL0ayR_gDh3eu1k",
 *   id: {
 *     kind: "youtube#video",
 *     videoId: "dQw4w9WgXcQ"
 *   },
 *   snippet: {
 *     publishedAt: "2009-10-25T06:57:33Z",
 *     channelId: "UCuAXFkgsw1L7xaCfnd5JJOw",
 *     title: "Rick Astley - Never Gonna Give You Up",
 *     description: "The official video for "Never Gonna Give You Up"...",
 *     thumbnails: {
 *       default: {
 *         url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg",
 *         width: 120,
 *         height: 90
 *       },
 *       medium: {
 *         url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
 *         width: 320,
 *         height: 180
 *       },
 *       high: {
 *         url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
 *         width: 480,
 *         height: 360
 *       }
 *     },
 *     channelTitle: "Rick Astley",
 *     liveBroadcastContent: "none"
 *   }
 * }
 * 
 * // 채널 검색 결과
 * {
 *   kind: "youtube#searchResult",
 *   etag: "...",
 *   id: {
 *     kind: "youtube#channel",
 *     channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA"
 *   },
 *   snippet: {
 *     publishedAt: "2015-03-10T12:00:00Z",
 *     channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
 *     title: "코딩 강의 채널",
 *     description: "프로그래밍 튜토리얼을 제공하는 채널입니다...",
 *     thumbnails: { ... },
 *     channelTitle: "코딩 강의 채널",
 *     liveBroadcastContent: "none"
 *   }
 * }
 * 
 * // 재생목록 검색 결과
 * {
 *   kind: "youtube#searchResult",
 *   etag: "...",
 *   id: {
 *     kind: "youtube#playlist",
 *     playlistId: "PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf"
 *   },
 *   snippet: {
 *     publishedAt: "2020-01-15T08:30:00Z",
 *     channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
 *     title: "TypeScript 완전 정복",
 *     description: "TypeScript를 기초부터 고급까지 배우는 재생목록",
 *     thumbnails: { ... },
 *     channelTitle: "코딩 강의 채널",
 *     liveBroadcastContent: "none"
 *   }
 * }
 * 
 * // 라이브 스트림 검색 결과
 * {
 *   kind: "youtube#searchResult",
 *   etag: "...",
 *   id: {
 *     kind: "youtube#video",
 *     videoId: "LIVE_VIDEO_ID"
 *   },
 *   snippet: {
 *     publishedAt: "2025-09-27T10:00:00Z",
 *     channelId: "UC...",
 *     title: "🔴 LIVE: 실시간 코딩 세션",
 *     description: "지금 라이브 중입니다!",
 *     thumbnails: { ... },
 *     channelTitle: "코딩 강의 채널",
 *     liveBroadcastContent: "live" // 현재 라이브 중
 *   }
 * }
 * 
 * // 결과 타입 확인 방법:
 * const item: TApiYoutubeSearchItem = searchResult.items[0];
 * 
 * if (item.id.videoId) {
 *   console.log('비디오:', item.id.videoId);
 * } else if (item.id.channelId) {
 *   console.log('채널:', item.id.channelId);
 * } else if (item.id.playlistId) {
 *   console.log('재생목록:', item.id.playlistId);
 * }
 */
export type TApiYoutubeSearchItem = {
  kind: string; // "youtube#searchResult"
  etag: string;
  id: {
    kind: string; // "youtube#video" | "youtube#channel" | "youtube#playlist"
    videoId?: string;      // 비디오 검색 결과일 때
    channelId?: string;    // 채널 검색 결과일 때
    playlistId?: string;   // 재생목록 검색 결과일 때
  };
  snippet: {
    publishedAt: string; // ISO 8601
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
    };
    channelTitle: string;
    liveBroadcastContent: "none" | "live" | "upcoming";
  };
};

/**
 * YouTube Search API 응답
 * search.list 엔드포인트의 전체 응답 구조
 * 
 * @example
 * // GET https://www.googleapis.com/youtube/v3/search?q=typescript tutorial&part=snippet&type=video&maxResults=5
 * {
 *   kind: "youtube#searchListResponse",
 *   etag: "XI7nbFXulYBIpL0ayR_gDh3eu1k",
 *   nextPageToken: "CAUQAA", // 다음 페이지 토큰
 *   regionCode: "KR",
 *   pageInfo: {
 *     totalResults: 1000000,  // 전체 검색 결과 수 (근사치)
 *     resultsPerPage: 5       // 현재 페이지 결과 수
 *   },
 *   items: [
 *     {
 *       kind: "youtube#searchResult",
 *       etag: "...",
 *       id: { kind: "youtube#video", videoId: "..." },
 *       snippet: {
 *         publishedAt: "2024-03-15T10:30:00Z",
 *         channelId: "UC...",
 *         title: "TypeScript Tutorial for Beginners",
 *         description: "Learn TypeScript from scratch...",
 *         thumbnails: { ... },
 *         channelTitle: "Programming Channel",
 *         liveBroadcastContent: "none"
 *       }
 *     },
 *     // ... 4개 더
 *   ]
 * }
 * 
 * // 페이지네이션 예시 (다음 페이지)
 * // GET .../search?q=typescript&part=snippet&pageToken=CAUQAA
 * {
 *   kind: "youtube#searchListResponse",
 *   etag: "...",
 *   nextPageToken: "CBQQAA",     // 다음 페이지
 *   prevPageToken: "CAEQAQ",     // 이전 페이지
 *   regionCode: "KR",
 *   pageInfo: {
 *     totalResults: 1000000,
 *     resultsPerPage: 5
 *   },
 *   items: [ ... ]
 * }
 * 
 * // 라이브 스트림만 검색
 * // GET .../search?q=coding&part=snippet&type=video&eventType=live
 * {
 *   kind: "youtube#searchListResponse",
 *   etag: "...",
 *   nextPageToken: "...",
 *   regionCode: "KR",
 *   pageInfo: {
 *     totalResults: 150,
 *     resultsPerPage: 10
 *   },
 *   items: [
 *     {
 *       id: { kind: "youtube#video", videoId: "..." },
 *       snippet: {
 *         title: "🔴 LIVE: Coding Session",
 *         liveBroadcastContent: "live", // 현재 라이브 중
 *         ...
 *       }
 *     }
 *   ]
 * }
 * 
 * // 채널만 검색
 * // GET .../search?q=programming&part=snippet&type=channel&maxResults=3
 * {
 *   kind: "youtube#searchListResponse",
 *   etag: "...",
 *   pageInfo: {
 *     totalResults: 50000,
 *     resultsPerPage: 3
 *   },
 *   items: [
 *     {
 *       id: { kind: "youtube#channel", channelId: "UC..." },
 *       snippet: {
 *         title: "Programming with Mosh",
 *         description: "코딩 교육 채널입니다",
 *         ...
 *       }
 *     }
 *   ]
 * }
 * 
 * // 검색 결과 없음
 * {
 *   kind: "youtube#searchListResponse",
 *   etag: "...",
 *   regionCode: "KR",
 *   pageInfo: {
 *     totalResults: 0,
 *     resultsPerPage: 0
 *   },
 *   items: [] // 빈 배열
 * }
 * 
 * // 사용 예시:
 * const response: TApiYoutubeSearchListResponse = await searchVideos('typescript tutorial');
 * 
 * // 비디오만 필터링
 * const videos = response.items.filter(item => item.id.videoId);
 * console.log(`${videos.length}개의 비디오 발견`);
 * 
 * // 다음 페이지 로드
 * if (response.nextPageToken) {
 *   const nextPage = await searchVideos('typescript tutorial', {
 *     pageToken: response.nextPageToken
 *   });
 * }
 * 
 * // 라이브 스트림 확인
 * const liveStreams = response.items.filter(
 *   item => item.snippet.liveBroadcastContent === 'live'
 * );
 */
export type TApiYoutubeSearchListResponse = {
  kind: string; // "youtube#searchListResponse"
  etag: string;
  nextPageToken?: string;    // 다음 페이지 토큰 (페이지네이션용)
  prevPageToken?: string;    // 이전 페이지 토큰
  regionCode?: string;       // 검색 지역 코드 (예: "KR", "US")
  pageInfo: {
    totalResults: number;    // 전체 검색 결과 수 (근사치, 실제보다 많을 수 있음)
    resultsPerPage: number;  // 현재 페이지의 결과 수 (maxResults와 동일)
  };
  items: TApiYoutubeSearchItem[];
};