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
//# sourceMappingURL=t-sql-content.js.map