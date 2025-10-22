/*
 * DB 컬럼 목록 For Youtube Video
 */
export type TSqlYoutubeVideoList = {
  video_id: string;
  title: string;
  published_date: string | null;
  is_shorts: boolean;
  channel_id: string | null;
  channel_name: string | null;
  language: string;
  default_audio_language: string | null;
  view_count: number;
  like_count: number;
  favorite_count: number;
  comment_count: number;
  duration_seconds: number;
  created_at: string;
  updated_at: string;
  last_processed_at: string | null;
  is_active: boolean;
  is_deleted: boolean;
};


/*
 * DB 컬럼 목록 For Youtube Video
 */
export type TSqlYoutubeVideoDetail = TSqlYoutubeVideoList & {
  etag: string;
  kind: string;
  description: string | null;
  channel_url: string | null;
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
  category_id: string | null;
  localized_title: string | null;
  localized_description: string | null;
  live_broadcast_content: string;
  tags: string[] | string | null;
  duration_text: string | null;
  dimension: string | null;
  definition: string | null;
  caption: string;
  licensed_content: string;
  projection: string | null;
  upload_status: string;
  privacy_status: string;
  license: string | null;
  embeddable: string;
  public_stats_viewable: string;
  topic_ids: string[] | string | null;
  relevant_topic_ids: string[] | string | null;
  thumbnail_default_url: string | null;
  thumbnail_default_width: number;
  thumbnail_default_height: number;
  thumbnail_medium_url: string | null;
  thumbnail_medium_width: number;
  thumbnail_medium_height: number;
  thumbnail_high_url: string | null;
  thumbnail_high_width: number;
  thumbnail_high_height: number;
  thumbnail_standard_url: string | null;
  thumbnail_standard_width: number;
  thumbnail_standard_height: number;
  thumbnail_maxres_url: string | null;
  thumbnail_maxres_width: number;
  thumbnail_maxres_height: number;
  thumbnail_url: string | null;
  thumbnail_width: number;
  thumbnail_height: number;
  upload_date: string | null;
  category: string | null;
  is_live: string;
  is_upcoming: string;
  is_private: string;
  age_restricted: string;
  family_safe: string;
  metadata_json: string | null;
  deleted_at: string | null;
};


/*
 * DB 컬럼 목록 For Youtube Video Insert
 */
export type TSqlYoutubeVideoDetailInsert = {
  video_id: string;
} & Partial<Omit<TSqlYoutubeVideoDetail, "video_id">>;

/*
 * DB 컬럼 목록 For Youtube Video Update
 */
export type TSqlYoutubeVideoDetailUpdate = Partial<
  Omit<TSqlYoutubeVideoDetail, "video_id">
>;

/*
 * DB 컬럼 목록 For Youtube Video List
 */
export const SQL_DB_COLUMNS_YOUTUBE_VIDEO_LIST = [
  "video_id",
  "title",
  "published_date",
  "is_shorts",
  "channel_id",
  "channel_name",
  "language",
  "default_audio_language",
  "view_count",
  "like_count",
  "favorite_count",
  "comment_count",
  "duration_seconds",
  "created_at",
  "updated_at",
  "last_processed_at",
  "is_active",
  "is_deleted",
];


/*
 * DB 컬럼 목록 For Youtube Video Detail
 */
export const SQL_DB_COLUMNS_YOUTUBE_VIDEO_DETAIL = [
  ...SQL_DB_COLUMNS_YOUTUBE_VIDEO_LIST,
  "etag",
  "kind",
  "description",
  "channel_url",
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
  "category_id",
  "localized_title",
  "localized_description",
  "live_broadcast_content",
  "tags",
  "duration_text",
  "duration_seconds",
  "dimension",
  "definition",
  "caption",
  "licensed_content",
  "projection",
  "upload_status",
  "privacy_status",
  "license",
  "embeddable",
  "public_stats_viewable",
  "topic_ids",
  "relevant_topic_ids",
  "thumbnail_default_url",
  "thumbnail_default_width",
  "thumbnail_default_height",
  "thumbnail_medium_url",
  "thumbnail_medium_width",
  "thumbnail_medium_height",
  "thumbnail_high_url",
  "thumbnail_high_width",
  "thumbnail_high_height",
  "thumbnail_standard_url",
  "thumbnail_standard_width",
  "thumbnail_standard_height",
  "thumbnail_maxres_url",
  "thumbnail_maxres_width",
  "thumbnail_maxres_height",
  "thumbnail_url",
  "thumbnail_width",
  "thumbnail_height",
  "upload_date",
  "category",
  "keywords",
  "is_live",
  "is_upcoming",
  "is_private",
  "age_restricted",
  "family_safe",
  "metadata_json",
  "deleted_at",
];

