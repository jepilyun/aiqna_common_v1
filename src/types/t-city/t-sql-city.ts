/*
 * DB 컬럼 목록 For City Option
 */
export type TSqlCityOption = {
  country_code: string | null;
  city_code: string;
  name_en: string;
  name_native: string | null;
  name_ko: string | null;
  order_num: number;
  is_active: boolean;
  is_display: boolean;
};

/*
 * DB 컬럼 목록 For City List For Admin
 */
export type TSqlCityListForAdmin = TSqlCityOption & {
  google_place_id: string | null;
  official_web: string | null;
  official_web_tour: string | null;
  youtube_official_id: string | null;
  youtube_tour_id: string | null;
  tiktok_official_id: string | null;
  tiktok_tour_id: string | null;
  instagram_official_id: string | null;
  instagram_tour_id: string | null;
  google_map_url: string;
  naver_map_url: string | null;
};

/*
 * DB 컬럼 목록 For City Detail
 */
export type TSqlCityDetail = TSqlCityListForAdmin & {
  description_en: string | null;
  description_native: string | null;
  instagram_tags: string[] | string | null;
  latitude: number | null;
  longitude: number | null;
  location: string | null;
  radius_m: number | null;
  address_en: string | null;
  address_native: string | null;
  etc: string | null;
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
 * DB 컬럼 목록 For City Detail Insert
 */
export type TSqlCityDetailInsert = {
  country_code?: string | null;
  city_code: string;
  name_en: string;
  name_native?: string | null;
  name_ko?: string | null;
} & Partial<
  Omit<
    TSqlCityDetail,
    | "country_code"
    | "city_code"
    | "name_en"
    | "name_native"
    | "name_ko"
  >
>;

/*
 * DB 컬럼 목록 For City Detail Update
 */
export type TSqlCityDetailUpdate = Partial<Omit<TSqlCityDetail, "city_code">>;

/*
 * DB 컬럼 목록 For City Option
 */
export const DB_COLUMNS_CITY_OPTION = [
  "country_code", 
  "city_code", 
  "name_en", 
  "name_native", 
  "name_ko", 
  "is_active", 
  "is_display"
];

/*
 * DB 컬럼 목록 For City List For Admin
 */
export const DB_COLUMNS_CITY_LIST_FOR_ADMIN = [
  "country_code",
  "city_code",
  "name_en",
  "name_native",
  "name_ko",
  "order_num",
  "google_place_id",
  "official_web",
  "official_web_tour",
  "youtube_official_id",
  "youtube_tour_id",
  "tiktok_official_id",
  "tiktok_tour_id",
  "instagram_official_id",
  "instagram_tour_id",
  "google_map_url",
  "naver_map_url",
  "is_active",
  "is_display",
];

/*
 * 도시 데이터 문자열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_CITY_STR = [
  "country_code",
  "city_code",
  "name_en",
  "name_native",
  "name_ko",
  "description_en",
  "description_native",
  "google_place_id",
  "official_web",
  "official_web_tour",
  "youtube_official_id",
  "youtube_tour_id",
  "tiktok_official_id",
  "tiktok_tour_id",
  "instagram_official_id",
  "instagram_tour_id",
  "location",
  "address_en",
  "address_native",
  "google_map_url",
  "naver_map_url",
  "etc",
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
 * 도시 데이터 숫자 KEY 목록
 * FormDataParsing 할 때 사용
 */
export const KEYS_CITY_NUM = ["order_num", "latitude", "longitude", "radius_m"];

/*
 * 도시 데이터 불리언 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_CITY_BOOL = ["is_active", "is_display"];

/*
 * 도시 데이터 문자열 배열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_CITY_STR_ARRAY = ["instagram_tags"];


