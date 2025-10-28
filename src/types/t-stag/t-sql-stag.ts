/*
 * DB 컬럼 목록 For Stag List For Admin
 */
export type TSqlStagListForAdmin = {
  stag_code: string;
  target_country_code: string;
  name_en: string;
  name_native: string | null;
  order_num: number;
  url_en: string | null;
  img_url: string | null;
  youtube_ch_id: string | null;
  instagram_id: string | null;
  tiktok_id: string | null;
  is_active: boolean;
  is_display: boolean;
};

/*
 * DB 컬럼 목록 For Street Detail
 */
export type TSqlStagDetail = TSqlStagListForAdmin & {
  description_en: string | null;
  latitude: number | null;
  longitude: number | null;
  location: string | null;
  radius_m: number | null;
  address_en: string | null;
  address_native: string | null;
  google_map_url: string;
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
 * DB 컬럼 목록 For Stag Detail Insert
 */
export type TSqlStagDetailInsert = {
  stag_code: string;
  name_en: string;
} & Partial<
  Omit<
    TSqlStagDetail,
    | "stag_code"
    | "name_en"
  >
>;

/*
 * DB 컬럼 목록 For Stag Detail Update
 */
export type TSqlStagDetailUpdate = Omit<TSqlStagDetail, "stag_code">;

/*
 * DB 컬럼 목록 For Stag List For Admin
 */
export const DB_COLUMNS_STAG_LIST_FOR_ADMIN = [
  "stag_code",
  "target_country_code",
  "stag_code",
  "name_en",
  "name_native",
  "order_num",
  "url_en",
  "img_url",
  "youtube_ch_id",
  "instagram_id",
  "tiktok_id",
  "is_active",
  "is_display",
];

/*
 * 도로 데이터 문자열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_STAG_STR = [
  "stag_code",
  "target_country_code",
  "name_en",
  "name_native",
  "url_en",
  "img_url",
  "youtube_ch_id",
  "instagram_id",
  "tiktok_id",
  "description_en",
  "location",
  "address_en",
  "address_native",
  "google_map_url",
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
 * 도로 데이터 숫자 KEY 목록
 * FormDataParsing 할 때 사용
 */
export const KEYS_STAG_NUM = ["order_num", "latitude", "longitude", "radius_m"];

/*
 * 도로 데이터 불리언 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_STAG_BOOL = ["is_active", "is_display"];

/*
 * 도로 데이터 문자열 배열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_STAG_STR_ARRAY = [];


