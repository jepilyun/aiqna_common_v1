/*
 * DB 컬럼 목록 For Street Detail
 */
export type TSqlTagDetail = {
  id: string;
  tag: string;
  content_count: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
};

/*
 * DB 컬럼 목록 For Tag Detail Insert
 */
export type TSqlTagDetailInsert = {
  id: string;
  tag: string;
} & Partial<
  Omit<
    TSqlTagDetail,
    | "id"
    | "tag"
  >
>;

/*
 * DB 컬럼 목록 For Tag Detail Update
 */
export type TSqlTagDetailUpdate = Partial<Omit<TSqlTagDetail, "id" | "tag">>;

/*
 * 도로 데이터 문자열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_TAG_STR = [
  "id",
  "tag",
  "created_at",
  "updated_at",
];

/*
 * 도로 데이터 숫자 KEY 목록
 * FormDataParsing 할 때 사용
 */
export const KEYS_TAG_NUM = ["content_count"];

/*
 * 도로 데이터 불리언 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_TAG_BOOL = ["is_active"];

/*
 * 도로 데이터 문자열 배열 KEY 목록
 * FormData Parsing 할 때 사용
 */
export const KEYS_TAG_STR_ARRAY = [];


