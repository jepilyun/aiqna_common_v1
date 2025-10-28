/*
 * DB 컬럼 목록 For Content
 */
export type TSqlContentList = {
  content_code: string;
  country_code: string;
  city_code: string | null;
  street_code: string | null;
  name_en: string | null;
  name_native: string | null;
  name_ko: string | null;
  address_en: string | null;
  utc_offset_minutes: number | null;
  timezone: string | null;
  is_active: boolean;
  is_display: boolean;
};

/*
 * DB 컬럼 목록 For Google Place Detail
 */
export type TSqlContentDetail = TSqlContentList & {
  description_en: string | null;
  description_native: string | null;
  phone: string | null;
  address_native: string | null;
  latitude: number | null;
  longitude: number | null;
  location: string | null;
  radius_m: number | null;
  naver_map_url: string | null;
  instagram_id: string | null;
  youtube_ch_id: string | null;
  google_place_url: string | null;
  trip_advisor_url: string | null;
  facebook: string | null;
  is_target_for_family: boolean | null;
  is_target_for_children: boolean | null;
  is_target_for_couple: boolean | null;
  is_target_for_friends: boolean | null;
  is_target_for_solo: boolean | null;
  taking_minutes_start: number | null;
  taking_minutes_end: number | null;
  is_free_available: boolean | null;
  price_symbol: string | null;
  price_start: number | null;
  price_end: number | null;
  is_open_always: boolean | null;
  period_start: string | null;
  period_end: string | null;
  created_at: string;
  updated_at: string;
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
 * DB 컬럼 목록 For Google Place Detail Insert
 */
export type TSqlContentDetailInsert = {
  content_code: string;
  name_en: string;
} & Partial<
  Omit<
    TSqlContentDetail,
    | "content_code"
    | "name_en"
  >
>;

/*
 * DB 컬럼 목록 For City Detail Update
 */
export type TSqlContentDetailUpdate = Partial<Omit<TSqlContentDetail, "content_code">>;

/*
 * DB 컬럼 목록 For Google Place List For Admin
 */
export const DB_COLUMNS_CONTENT_LIST_FOR_ADMIN = [
  "content_code",
  "country_code",
  "city_code",
  "street_code",
  "name_en",
  "name_native",
  "name_ko",
  "address_en",
  "utc_offset_minutes",
  "timezone",
  "is_active",
  "is_display",
];

/*
 * 도시 데이터 문자열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_CONTENT_STR = [
  "content_code",
  "country_code",
  "city_code",
  "street_code",
  "name_en",
  "name_native",
  "name_ko",
  "address_en",
  "address_native",
  "timezone",
  "phone",
  "location",
  "radius_m",
  "naver_map_url",
  "instagram_id",
  "youtube_ch_id",
  "google_place_url",
  "trip_advisor_url",
  "facebook",
  "price_symbol",
  "period_start",
  "period_end",
  "fetched_at",
  "created_at",
  "updated_at",
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
export const KEYS_CONTENT_NUM = [
  "latitude",
  "longitude",
  "radius_m",
  "utc_offset_minutes",
  "taking_minutes_start",
  "taking_minutes_end",
  "price_start",
  "price_end",
];

/*
 * 도시 데이터 불리언 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_CONTENT_BOOL = [
  "is_free_available",
  "is_active",
  "is_display",
  "is_target_for_family",
  "is_target_for_children",
  "is_target_for_couple",
  "is_target_for_friends",
  "is_target_for_solo",
  "is_open_always",
];

/*
 * 도시 데이터 문자열 배열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_CONTENT_STR_ARRAY = [];


