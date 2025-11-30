/*
 * DB 컬럼 목록 For Google Place
 */
export type TSqlGooglePlace = {
  google_place_id: string;
  country_code: string;
  city_code: string | null;
  street_code: string | null;
  display_name: string;
  name_en: string | null;
  name_native: string | null;
  name_ko: string | null;
  is_active: boolean;
  is_display: boolean;
};

/*
 * DB 컬럼 목록 For Google Place Detail
 */
export type TSqlGooglePlaceDetail = TSqlGooglePlace & {
  editorial_summary: string | null;
  types: string | null;
  primary_type: string | null;
  phone: string | null;
  address: string | null;
  plus_code_global: string | null;
  plus_code_compound: string | null;
  latitude: number | null;
  longitude: number | null;
  location: string | null;
  low_latitude: number | null;
  low_longitude: number | null;
  high_latitude: number | null;
  high_longitude: number | null;
  rating: number | null;
  user_rating_count: number | null;
  periods: string | null;
  weekday_descriptions: string | null;
  business_status: string | null;
  utc_offset_minutes: number | null;
  timezone: string | null;
  photos: string | null;
  directions_uri: string | null;
  place_uri: string | null;
  reviews_uri: string | null;
  photos_uri: string | null;
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
  is_vegetarian_available: boolean | null;
  is_breakfast: boolean | null;
  is_brunch: boolean | null;
  is_lunch: boolean | null;
  is_dinner: boolean | null;
  is_bar: boolean | null;
  is_club: boolean | null;
  is_open_always: boolean | null;
  period_start: string | null;
  period_end: string | null;
  fetched_at: string;
  created_at: string;
  updated_at: string;
};

/*
 * DB 컬럼 목록 For Google Place Detail Insert
 */
export type TSqlGooglePlaceDetailInsert = {
  google_place_id: string;
  display_name: string;
} & Partial<
  Omit<
    TSqlGooglePlaceDetail,
    | "google_place_id"
    | "display_name"
  >
>;

/*
 * DB 컬럼 목록 For City Detail Update
 */
export type TSqlGooglePlaceDetailUpdate = Partial<Omit<TSqlGooglePlaceDetail, "google_place_id">>;

/*
 * DB 컬럼 목록 For Google Place List For Admin
 */
export const DB_COLUMNS_GOOGLE_PLACE_LIST_FOR_ADMIN = [
  "country_code",
  "city_code",
  "street_code",
  "display_name",
  "name_en",
  "name_native",
  "name_ko",
  "is_active",
  "is_display",
];

/*
 * 도시 데이터 문자열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_GOOGLE_PLACE_STR = [
  "country_code",
  "city_code",
  "street_code",
  "display_name",
  "name_en",
  "name_native",
  "name_ko",
  "editorial_summary",
  "types",
  "primary_type",
  "phone",
  "address",
  "plus_code_global",
  "plus_code_compound",
  "location",
  "periods",
  "weekday_descriptions",
  "business_status",
  "photos",
  "directions_uri",
  "place_uri",
  "reviews_uri",
  "photos_uri",
  "naver_map_url",
  "instagram_id",
  "youtube_ch_id",
  "google_place_url",
  "trip_advisor_url",
  "facebook",
  "price_symbol",
  "price_start",
  "price_end",
  "period_start",
  "period_end",
  "fetched_at",
  "created_at",
  "updated_at",
];

/*
 * 도시 데이터 숫자 KEY 목록
 * FormDataParsing 할 때 사용
 */
export const KEYS_GOOGLE_PLACE_NUM = [
  "latitude",
  "longitude",
  "radius_m",
  "low_latitude",
  "low_longitude",
  "high_latitude",
  "high_longitude",
  "rating",
  "user_rating_count",
  "taking_minutes_start",
  "taking_minutes_end",
];

/*
 * 도시 데이터 불리언 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_GOOGLE_PLACE_BOOL = [
  "is_free_available",
  "is_active",
  "is_display",
  "is_target_for_family",
  "is_target_for_children",
  "is_target_for_couple",
  "is_target_for_friends",
  "is_target_for_solo",
  "is_vegetarian_available",
  "is_breakfast",
  "is_brunch",
  "is_lunch",
  "is_dinner",
  "is_bar",
  "is_club",
  "is_open_always",
];

/*
 * 도시 데이터 문자열 배열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_GOOGLE_PLACE_STR_ARRAY = [];


