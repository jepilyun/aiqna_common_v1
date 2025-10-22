/*
 * DB 컬럼 목록 For Instagram Post
 */
export type TSqlInstagramPostList = {
  uuid_36: string;
  instagram_post_url: string;
  post_type: string;
  media_count: number;
  og_title: string | null;
  like_count: number;
  comment_count: number;
  view_count: number;
  user_id: string | null;
  user_name: string | null;
  published_date: string | null;
  location_name: string | null;
  created_at: string;
  updated_at: string;
  last_processed_at: string | null;
  is_active: boolean;
  is_deleted: boolean;
};


/*
 * DB 컬럼 목록 For Youtube Video
 */
export type TSqlInstagramPostDetail = TSqlInstagramPostList & {
  media_urls: string[];
  og_description: string | null;
  og_image: string | null;
  og_url: string | null;
  og_ios_url: string | null;
  og_android_package: string | null;
  og_android_url: string | null;
  description: string | null;
  tags: string[];
  user_profile_url: string | null;
  local_image_url: string | null;
  location_id: string | null;
  latitude: string | null;
  longitude: string | null;
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
  info_travel_tips: string[] | null;
  metadata_json: string | null;
  deleted_at: string | null;
};


/*
 * DB 컬럼 목록 For Youtube Video Insert
 */
export type TSqlInstagramPostDetailInsert = {
  instagram_post_url: string;
} & Partial<Omit<TSqlInstagramPostDetail, "instagram_post_url">>;

/*
 * DB 컬럼 목록 For Youtube Video Update
 */
export type TSqlInstagramPostDetailUpdate = Partial<
  Omit<TSqlInstagramPostDetail, "instagram_post_url" | "uuid_36">
>;


/*
 * DB 컬럼 목록 For Youtube Video List
 */
export const SQL_DB_COLUMNS_INSTAGRAM_POST_LIST = [
  "uuid_36",
  "instagram_post_url",
  "post_type",
  "media_count",
  "og_title",
  "like_count",
  "comment_count",
  "view_count",
  "user_id",
  "user_name",
  "published_date",
  "location_name",
  "created_at",
  "updated_at",
  "last_processed_at",
  "is_active",
  "is_deleted",
];


/*
 * DB 컬럼 목록 For Youtube Video Detail
 */
export const SQL_DB_COLUMNS_INSTAGRAM_POST_DETAIL = [
  ...SQL_DB_COLUMNS_INSTAGRAM_POST_LIST,
  "media_urls",
  "og_description",
  "og_image",
  "og_url",
  "og_ios_url",
  "og_android_package",
  "og_android_url",
  "description",
  "tags",
  "user_profile_url",
  "local_image_url",
  "location_id",
  "latitude",
  "longitude",
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

