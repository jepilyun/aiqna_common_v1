/*
 * DB 컬럼 목록 For Neighborhood List For Admin
 */
export type TSqlNeighborhoodListForAdmin = {
  id: number;
  country_code: string | null;
  city_code: string | null;
  name_en: string;
  name_native: string | null;
  name_ko: string | null;
  order_num: number;
  google_place_id: string | null;
  youtube_ch_id: string | null;
  instagram_id: string | null;
  is_active: boolean;
  is_display: boolean;
};

/*
 * DB 컬럼 목록 For Neighborhood Detail
 */
export type TSqlNeighborhoodDetail = TSqlNeighborhoodListForAdmin & {
  description_en: string | null;
  description_native: string | null;
  latitude: number | null;
  longitude: number | null;
  location: string | null;
  radius_m: number | null;
  address_en: string | null;
  address_native: string | null;
  google_map_url: string;
  naver_map_url: string | null;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  deactivated_at: string | null;
  deactivated_by: string | null;
  thumbnail_main_1: string | null;
  thumbnail_main_2: string | null;
  thumbnail_main_3: string | null;
  thumbnail_main_4: string | null;
  thumbnail_main_5: string | null;
  thumbnail_1: string | null;
  thumbnail_2: string | null;
  thumbnail_3: string | null;
  thumbnail_4: string | null;
  thumbnail_5: string | null;
  thumbnail_vertical_1: string | null;
  thumbnail_vertical_2: string | null;
  thumbnail_vertical_3: string | null;
  thumbnail_vertical_4: string | null;
  thumbnail_vertical_5: string | null;
};

/*
 * DB 컬럼 목록 For Neighborhood Detail Insert
 */
export type TSqlNeighborhoodDetailInsert = {
  name_en: string;
} & Partial<
  Omit<
    TSqlNeighborhoodDetail,
    | "name_en"
  >
>;

/*
 * DB 컬럼 목록 For Neighborhood Detail Update
 */
export type TSqlNeighborhoodDetailUpdate = Omit<TSqlNeighborhoodDetail, "id">;

/*
 * DB 컬럼 목록 For Neighborhood List For Admin
 */
export const DB_COLUMNS_NEIGHBORHOOD_LIST_FOR_ADMIN = [
  "id",
  "country_code",
  "city_code",
  "name_en",
  "name_native",
  "name_ko",
  "youtube_ch_id",
  "instagram_id",
  "google_place_id",
  "order_num",
  "is_active",
  "is_display",
];

/*
 * 동네 데이터 문자열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_NEIGHBORHOOD_STR = [
  "country_code",
  "city_code",
  "street_code",
  "name_en",
  "name_native",
  "name_ko",
  "description_en",
  "description_ko",
  "google_place_id",
  "youtube_ch_id",
  "instagram_id",
  "address_en",
  "address_native",
  "google_map_url",
  "naver_map_url",
  "created_at",
  "created_by",
  "updated_at",
  "deactivated_at",
  "deactivated_by",
  "thumbnail_main_1",
  "thumbnail_main_2",
  "thumbnail_main_3",
  "thumbnail_main_4",
  "thumbnail_main_5",
  "thumbnail_1",
  "thumbnail_2",
  "thumbnail_3",
  "thumbnail_4",
  "thumbnail_5",
  "thumbnail_vertical_1",
  "thumbnail_vertical_2",
  "thumbnail_vertical_3",
  "thumbnail_vertical_4",
  "thumbnail_vertical_5",
];

/*
 * 지역 데이터 숫자 KEY 목록
 * FormDataParsing 할 때 사용
 */
export const KEYS_NEIGHBORHOOD_NUM = ["order_num", "latitude", "longitude", "radius_m"];

/*
 * 동네 데이터 불리언 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_NEIGHBORHOOD_BOOL = ["is_active", "is_display"];

/*
 * 동네 데이터 문자열 배열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_NEIGHBORHOOD_STR_ARRAY = [];


