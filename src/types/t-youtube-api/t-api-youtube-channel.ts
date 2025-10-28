/**
 * YouTube 채널 기본 정보 (snippet)
 * 채널의 메타데이터와 썸네일 정보
 * 
 * @example
 * {
 *   title: "코딩애플",
 *   description: "프로그래밍 강의를 쉽고 재미있게! 웹개발, 앱개발 등 다양한 코딩 강의를 제공합니다.",
 *   publishedAt: "2018-06-15T08:30:00Z",
 *   thumbnails: {
 *     default: {
 *       url: "https://yt3.ggpht.com/CHANNEL_ID/photo.jpg",
 *       width: 88,
 *       height: 88
 *     },
 *     medium: {
 *       url: "https://yt3.ggpht.com/CHANNEL_ID/photo.jpg",
 *       width: 240,
 *       height: 240
 *     },
 *     high: {
 *       url: "https://yt3.ggpht.com/CHANNEL_ID/photo.jpg",
 *       width: 800,
 *       height: 800
 *     }
 *   },
 *   localized: {
 *     title: "코딩애플",
 *     description: "프로그래밍 강의를 쉽고 재미있게!..."
 *   }
 * }
 * 
 * // 영어 채널 예시
 * {
 *   title: "Fireship",
 *   description: "High-intensity ⚡ code tutorials and tech news to help you ship your app faster.",
 *   publishedAt: "2017-03-29T18:28:01Z",
 *   thumbnails: { ... },
 *   localized: {
 *     title: "Fireship",
 *     description: "High-intensity ⚡ code tutorials..."
 *   }
 * }
 */
export type TApiYoutubeChannelSnippet = {
  title: string;
  description: string;
  publishedAt: string; // 채널 생성일
  thumbnails: {
    default: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
  };
  localized: {
    title: string;
    description: string;
  };
};

/**
 * YouTube 채널 통계 정보
 * 구독자, 조회수, 비디오 수 등의 지표 (모두 문자열로 반환됨)
 * 
 * @example
 * // 일반 채널
 * {
 *   viewCount: "125847392",         // 1억 2천만 조회
 *   subscriberCount: "1520000",     // 152만 구독자
 *   hiddenSubscriberCount: false,   // 구독자 수 공개
 *   videoCount: "487"               // 487개 비디오
 * }
 * 
 * // 구독자 수 비공개 채널
 * {
 *   viewCount: "5847392",
 *   subscriberCount: "0",           // 비공개 시 "0" 반환
 *   hiddenSubscriberCount: true,    // 구독자 수 숨김
 *   videoCount: "120"
 * }
 * 
 * // 대형 채널 예시 (MrBeast)
 * {
 *   viewCount: "50000000000",       // 500억 조회
 *   subscriberCount: "250000000",   // 2억 5천만 구독자
 *   hiddenSubscriberCount: false,
 *   videoCount: "750"
 * }
 * 
 * // 주의사항:
 * // 1. 모든 값이 문자열 타입
 * const subscribers = parseInt(statistics.subscriberCount);
 * 
 * // 2. hiddenSubscriberCount가 true면 subscriberCount는 신뢰 불가
 * if (!statistics.hiddenSubscriberCount) {
 *   console.log(`구독자: ${statistics.subscriberCount.toLocaleString()}`);
 * } else {
 *   console.log('구독자 수 비공개');
 * }
 */
export type TApiYoutubeChannelStatistics = {
  viewCount: string;              // 채널 전체 조회수
  subscriberCount: string;        // 구독자 수 (비공개 시 "0")
  hiddenSubscriberCount: boolean; // 구독자 수 비공개 여부
  videoCount: string;             // 업로드된 비디오 수
};

/**
 * YouTube 채널 상세 정보 (개별 아이템)
 * API 응답의 items 배열에 포함되는 단일 채널 객체
 * 
 * @example
 * {
 *   kind: "youtube#channel",
 *   etag: "XI7nbFXulYBIpL0ayR_gDh3eu1k",
 *   id: "UCX6OQ3DkcsbYNE6H8uQQuVA",
 *   snippet: {
 *     title: "코딩애플",
 *     description: "프로그래밍 강의를 쉽고 재미있게!...",
 *     publishedAt: "2018-06-15T08:30:00Z",
 *     thumbnails: {
 *       default: {
 *         url: "https://yt3.ggpht.com/.../photo.jpg",
 *         width: 88,
 *         height: 88
 *       },
 *       medium: {
 *         url: "https://yt3.ggpht.com/.../photo.jpg",
 *         width: 240,
 *         height: 240
 *       },
 *       high: {
 *         url: "https://yt3.ggpht.com/.../photo.jpg",
 *         width: 800,
 *         height: 800
 *       }
 *     },
 *     localized: {
 *       title: "코딩애플",
 *       description: "프로그래밍 강의를 쉽고 재미있게!..."
 *     }
 *   },
 *   statistics: {
 *     viewCount: "125847392",
 *     subscriberCount: "1520000",
 *     hiddenSubscriberCount: false,
 *     videoCount: "487"
 *   }
 * }
 * 
 * // 신규 채널 예시
 * {
 *   kind: "youtube#channel",
 *   etag: "...",
 *   id: "UC...",
 *   snippet: {
 *     title: "새로운 코딩 채널",
 *     description: "이제 막 시작한 채널입니다",
 *     publishedAt: "2025-09-01T00:00:00Z",
 *     thumbnails: { ... },
 *     localized: { ... }
 *   },
 *   statistics: {
 *     viewCount: "1250",          // 초기 조회수
 *     subscriberCount: "45",       // 소수 구독자
 *     hiddenSubscriberCount: false,
 *     videoCount: "3"              // 몇 개 안되는 비디오
 *   }
 * }
 * 
 * // 구독자 비공개 채널 예시
 * {
 *   kind: "youtube#channel",
 *   etag: "...",
 *   id: "UC...",
 *   snippet: { ... },
 *   statistics: {
 *     viewCount: "5000000",
 *     subscriberCount: "0",        // 비공개여서 0 표시
 *     hiddenSubscriberCount: true, // 비공개 플래그
 *     videoCount: "150"
 *   }
 * }
 */
export type TApiYoutubeChannelItem = {
  kind: string; // "youtube#channel"
  etag: string;
  id: string; // channelId
  snippet: TApiYoutubeChannelSnippet;
  statistics: TApiYoutubeChannelStatistics;
};

/**
 * YouTube Data API v3 채널 목록 응답
 * channels.list 엔드포인트의 전체 응답 구조
 * 
 * @example
 * // GET https://www.googleapis.com/youtube/v3/channels?id=UCX6OQ3DkcsbYNE6H8uQQuVA&part=snippet,statistics
 * {
 *   kind: "youtube#channelListResponse",
 *   etag: "XI7nbFXulYBIpL0ayR_gDh3eu1k",
 *   pageInfo: {
 *     totalResults: 1,
 *     resultsPerPage: 1
 *   },
 *   items: [
 *     {
 *       kind: "youtube#channel",
 *       etag: "...",
 *       id: "UCX6OQ3DkcsbYNE6H8uQQuVA",
 *       snippet: {
 *         title: "코딩애플",
 *         description: "프로그래밍 강의를 쉽고 재미있게!...",
 *         publishedAt: "2018-06-15T08:30:00Z",
 *         thumbnails: { ... },
 *         localized: { ... }
 *       },
 *       statistics: {
 *         viewCount: "125847392",
 *         subscriberCount: "1520000",
 *         hiddenSubscriberCount: false,
 *         videoCount: "487"
 *       }
 *     }
 *   ]
 * }
 * 
 * // 여러 채널 조회 (쉼표로 구분)
 * // GET .../channels?id=CHANNEL_ID1,CHANNEL_ID2,CHANNEL_ID3&part=snippet,statistics
 * {
 *   kind: "youtube#channelListResponse",
 *   etag: "...",
 *   pageInfo: {
 *     totalResults: 3,
 *     resultsPerPage: 3
 *   },
 *   items: [
 *     {
 *       id: "CHANNEL_ID1",
 *       snippet: { title: "채널1", ... },
 *       statistics: { ... }
 *     },
 *     {
 *       id: "CHANNEL_ID2",
 *       snippet: { title: "채널2", ... },
 *       statistics: { ... }
 *     },
 *     {
 *       id: "CHANNEL_ID3",
 *       snippet: { title: "채널3", ... },
 *       statistics: { ... }
 *     }
 *   ]
 * }
 * 
 * // 내 채널 조회 (OAuth 인증 필요)
 * // GET .../channels?mine=true&part=snippet,statistics
 * {
 *   kind: "youtube#channelListResponse",
 *   etag: "...",
 *   pageInfo: {
 *     totalResults: 1,
 *     resultsPerPage: 1
 *   },
 *   items: [
 *     {
 *       id: "MY_CHANNEL_ID",
 *       snippet: { title: "내 채널", ... },
 *       statistics: { ... }
 *     }
 *   ]
 * }
 * 
 * // 채널을 찾지 못한 경우
 * {
 *   kind: "youtube#channelListResponse",
 *   etag: "...",
 *   pageInfo: {
 *     totalResults: 0,
 *     resultsPerPage: 0
 *   },
 *   items: [] // 빈 배열
 * }
 * 
 * // 사용 예시:
 * const response: TApiYoutubeChannelListResponse = await fetchChannelDetails(channelId);
 * 
 * if (response.items.length === 0) {
 *   console.log('채널을 찾을 수 없습니다');
 * } else {
 *   const channel = response.items[0];
 *   console.log(`채널명: ${channel.snippet.title}`);
 *   
 *   // 구독자 수 표시
 *   if (!channel.statistics.hiddenSubscriberCount) {
 *     const subs = parseInt(channel.statistics.subscriberCount);
 *     console.log(`구독자: ${subs.toLocaleString()}명`);
 *   } else {
 *     console.log('구독자 수: 비공개');
 *   }
 *   
 *   // 채널 활동성 확인
 *   const videos = parseInt(channel.statistics.videoCount);
 *   const views = parseInt(channel.statistics.viewCount);
 *   const avgViewsPerVideo = Math.round(views / videos);
 *   console.log(`비디오당 평균 조회수: ${avgViewsPerVideo.toLocaleString()}`);
 * }
 * 
 * // 비디오에서 채널 정보 가져오기 패턴:
 * // 1. video.snippet.channelId로 채널 ID 획득
 * const videoResponse = await getVideoDetails(videoId);
 * const channelId = videoResponse.items[0].snippet.channelId;
 * 
 * // 2. 채널 상세 정보 조회
 * const channelResponse = await getChannelDetails(channelId);
 * const channelInfo = channelResponse.items[0];
 */
export type TApiYoutubeChannelListResponse = {
  kind: string; // "youtube#channelListResponse"
  etag: string;
  pageInfo: {
    totalResults: number;    // 조회된 채널 수
    resultsPerPage: number;  // 페이지당 결과 수
  };
  items: TApiYoutubeChannelItem[];
};