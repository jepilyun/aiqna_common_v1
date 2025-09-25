

export type ResponseDBSelect<T> = {
  data: T;
  count?: number;
  apiUrl?: string | null;
};

type ResponseListBase = {
  start: number;
  limit: number;
  total: number;
  hasMore: boolean;
};

export type ResponseItemsPaired<TMap, TContent> = {
  items: Array<{ map: TMap; content: TContent }>;
} & ResponseListBase;

export type ResponseItemsFlat<TContent> = {
  items: TContent[];
} & ResponseListBase;

/**
 * Response City Detail For Admin
 */
// export type ResponseCityDetailForAdmin = {
//   content: TCityDetail;
//   images?: TCityImage[];
//   i18n?: TCityI18n[];
//   metadataI18n?: TCityMetadataI18n[];
//   mapCityContent?: ResponseItemsFlat<TMapCityContent>;
//   mapCityYouTubeVideo?: ResponseItemsFlat<TMapCityYouTubeVideo>;
//   mapCityInstagram?: ResponseItemsFlat<TMapCityInstagram>;
// };

/**
 * Response City For Public
 */
// export type ResponseCityDetailForPublic = {
//   content: TCityDetail;
//   images?: TCityImage[];
//   i18n?: TCityI18n;
//   metadataI18n?: TCityMetadataI18n;
//   categories?: TCategoryListForPublic[];
//   streets?: TStreetListForCityDetail[];
//   mapCityContent?: ResponseItemsPaired<TMapCityContent, TContentDetail>;
//   mapCityYouTubeVideo?: ResponseItemsPaired<TMapCityYouTubeVideo, TCompletedYouTubeVideoListForPublicFront>;
//   mapCityInstagram?: ResponseItemsPaired<TMapCityInstagram, TInstagramContent>;
// };



/**
 * Response Content Detail For Admin
 */
// export type ResponseContentDetailForAdmin = {
//   content: TContentDetail;
//   googlePlaceData?: TGooglePlaceData;
//   tripAdvisorData?: TTripAdvisorData;
//   showTimetable?: TContentShowTimetable[];
//   price?: TContentPrice[];
//   image?: TContentImage[];
//   i18n?: TContentI18n[];
//   metadataI18n?: TContentMetadataI18n[];
//   keyword?: TContentKeyword[];
//   gpPhoto?: TContentGPPhoto[];
//   mapContentCategory?: TMapCategoryContent[];
//   mapContentCity?: TMapCityContent[];
//   mapContentStreet?: TMapStreetContent[];
//   mapContentInstagram?: TMapContentInstagram[];
//   mapContentYouTubeVideo?: TMapContentYouTubeVideo[];
//   mapContentStag?: TMapStagContent[];
//   mapContentTag?: TMapTagContent[];
// };



/**
 * Response Content Detail For Public
 */
// export type ResponseContentDetailForPublic = {
//   content: TContentDetail;
//   cityDetail?: { 
//     city_code: string;
//     name: string;
//     native: string;
//     name_ko: string;
//   };
//   showTimetable?: TContentShowTimetable[];
//   price?: TContentPrice[];
//   image?: TContentImage[];
//   i18n?: TContentI18n;
//   metadataI18n?: TContentMetadataI18n;
//   keyword?: TContentKeyword[];
//   gpPhoto?: TContentGPPhoto[];
  
//   mapContentCity?: {
//     map: TMapCityContent;
//     city: {
//       city_code: string;
//       name: string;
//       native: string;
//     };
//   }[];
//   mapContentStreet?: {
//     map: TMapStreetContent;
//     street: {
//       city_code: string;
//       street_code: string;
//       name: string;
//       native: string;
//     };
//   }[];
//   mapContentCategory?: {
//     map: TMapCategoryContent;
//     category: {
//       target_country_code: string;
//       category_code: string;
//       order_num: number;
//       name: string;
//     };
//   }[];

//   mapContentInstagram?: ResponseItemsPaired<TMapContentInstagram, TInstagramContent>;
//   mapContentYouTubeVideo?: ResponseItemsPaired<TMapContentYouTubeVideo, TCompletedYouTubeVideoListForPublicFront>;
//   mapContentStag?: ResponseItemsPaired<TMapStagContent, TStagListForContentDetail>;
//   mapContentTag?: ResponseItemsPaired<TMapTagContent, TTag>;
// };



export type ResponseAianaAPI<T> = {
  success: boolean;
  alarm?: string | null;
  status?: string | null;
  msg?: string | null;
  dbResponse?: T | null | undefined;
  error?: string | null;
  missingFields?: string[] | string | null;
};
