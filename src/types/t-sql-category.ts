/*
 * DB 컬럼 목록 For Category List
 */
export type TSqlCategoryListForAdmin = {
  category_code: string;
  target_country_code: string;
  upper_category_code: string;
  order_num: number;
  name_en: string;
  name_ko: string;
  is_open_always: boolean;
  start_month: number;
  start_day: number;
  end_month: number;
  end_day: number;
  is_active: boolean;
  is_display: boolean;
};

/*
 * DB 컬럼 목록 For Category Detail
 */
export type TSqlCategoryDetail = TSqlCategoryListForAdmin & {
  description_en: string | null;
  description_ko: string | null;
  icon_url: string | null;
  img_url: string | null;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  is_active: boolean;
  deactivated_at: string | null;
  deactivated_by: string | null;
  is_display: boolean;
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
 * DB 컬럼 목록 For Category Detail Insert
 */
export type TSqlCategoryDetailInsert = {
  category_code: string;
  name_en: string;
} & Partial<
  Omit<
    TSqlCategoryDetail,
    | "category_code"
    | "name_en"
  >
>;

/*
 * DB 컬럼 목록 For City Detail Update
 */
export type TSqlCategoryDetailUpdate = {
  category_code: string;
} & Partial<Omit<TSqlCategoryDetail, "category_code">>;

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


