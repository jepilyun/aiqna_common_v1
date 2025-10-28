/*
 * DB 컬럼 목록 For Influencer List For Admin
 */
export const DB_COLUMNS_INFLUENCER_LIST_FOR_ADMIN = [
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
 * 랜드마크 데이터 문자열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_INFLUENCER_STR = [
    "country_code",
    "city_code",
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
 * 인플루언서 데이터 숫자 KEY 목록
 * FormDataParsing 할 때 사용
 */
export const KEYS_INFLUENCER_NUM = ["order_num", "latitude", "longitude", "radius_m"];
/*
 * 인플루언서 데이터 불리언 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_INFLUENCER_BOOL = ["is_active", "is_display"];
/*
 * 인플루언서 데이터 문자열 배열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_INFLUENCER_STR_ARRAY = [];
//# sourceMappingURL=t-sql-influencer.js.map