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
//# sourceMappingURL=t-sql-city.js.map