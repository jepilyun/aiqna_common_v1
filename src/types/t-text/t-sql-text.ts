import { TTravelTipItem } from "../t-travel-tip.js";

/*
 * DB 컬럼 목록 For Blog Post
 */
export type TSqlTextList = {
  hash_key: string;
  title: string;
  created_at: string;
  updated_at: string;
  last_processed_at: string | null;
  is_active: boolean;
  is_deleted: boolean;
};

/*
 * DB 컬럼 목록 For Youtube Video
 */
export type TSqlTextDetail = TSqlTextList & {
  content: string;
  info_country: string[] | null;
  info_city: string[] | null;
  info_district: string[] | null;
  info_neighborhood: string[] | null;
  info_landmark: string[] | null;
  info_category: string[] | null;
  info_name: string[] | null;
  info_special_tag: string[] | null;
  info_influencer: string[] | null;
  info_season: string[] | null;
  info_time_of_day: string[] | null;
  info_activity_type: string[] | null;
  info_reservation_required: boolean;
  info_travel_tips: TTravelTipItem[] | null;
  metadata_json: string | null;
  deleted_at: string | null;
};


/*
 * DB 컬럼 목록 For Youtube Video Insert
 */
export type TSqlTextDetailInsert = {
  hash_key: string;
} & Partial<Omit<TSqlTextDetail, "hash_key">>;

/*
 * DB 컬럼 목록 For Youtube Video Update
 */
export type TSqlTextDetailUpdate = Partial<
  Omit<TSqlTextDetail, "hash_key">
>;

/*
 * DB 컬럼 목록 For Youtube Video List
 */
export const SQL_DB_COLUMNS_TEXT_LIST = [
  "hash_key",
  "title",
  "created_at",
  "updated_at",
  "last_processed_at",
  "is_active",
  "is_deleted",
];


/*
 * DB 컬럼 목록 For Youtube Video Detail
 */
export const SQL_DB_COLUMNS_TEXT_DETAIL = [
  ...SQL_DB_COLUMNS_TEXT_LIST,
  "content",
  "info_country",
  "info_city",
  "info_district",
  "info_neighborhood",
  "info_landmark",
  "info_category",
  "info_name",
  "info_special_tag",
  "info_influencer",
  "info_season",
  "info_time_of_day",
  "info_activity_type",
  "info_reservation_required",
  "info_travel_tips",
  "metadata_json",
  "deleted_at",
];
