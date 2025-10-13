/*
 * DB 컬럼 목록 For Category List For Admin
 */
export const DB_COLUMNS_CATEGORY_LIST_FOR_ADMIN = [
    "category_code",
    "target_country_code",
    "upper_category_code",
    "order_num",
    "name_en",
    "name_ko",
    "is_open_always",
    "start_month",
    "start_day",
    "end_month",
    "end_day",
    "is_active",
    "is_display",
];
/*
 * 도시 데이터 문자열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_CATEGORY_STR = [
    "category_code",
    "target_country_code",
    "upper_category_code",
    "name_en",
    "name_ko",
    "description_en",
    "description_native",
    "icon_url",
    "img_url",
    "created_at",
    "created_by",
    "updated_at",
    "deactivated_at",
    "deactivated_by",
    "is_active",
    "is_display",
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
export const KEYS_CATEGORY_NUM = ["order_num", "start_month", "start_day", "end_month", "end_day"];
/*
 * 도시 데이터 불리언 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_CATEGORY_BOOL = ["is_open_always", "is_active", "is_display"];
/*
 * 도시 데이터 문자열 배열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_CATEGORY_STR_ARRAY = [];
//# sourceMappingURL=t-sql-category.js.map