/*
 * DB 컬럼 목록 For Youtube Video
 */
export type TYoutubeVideoList = {
  id: string;
  video_id: string;
  etag: string;
  kind: string;
  title: string;
  published_date: string | null;
  channel_id: string | null;
  channel_name: string | null;
  language: string;
  default_audio_language: string | null;
  view_count: number;
  like_count: number;
  favorite_count: number;
  comment_count: number;
  created_at: string;
  updated_at: string;
  last_processed_at: string | null;
};


/*
 * DB 컬럼 목록 For Youtube Video
 */
export type TYoutubeVideoDetail = TYoutubeVideoList & {
  description: string | null;
  channel_url: string | null;
  category_id: string | null;
  localized_title: string | null;
  localized_description: string | null;
  live_broadcast_content: string;
  tags: string[] | string | null;
  duration_text: string | null;
  duration_seconds: number;
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
  keywords: string[] | string | null;
  is_live: string;
  is_upcoming: string;
  is_private: string;
  age_restricted: string;
  family_safe: string;
};


/*
 * DB 컬럼 목록 For Youtube Video Insert
 */
export type TYoutubeVideoDetailInsert = {
  video_id: string;
  etag: string;
  kind: string;
  title: string;
} & Partial<Omit<TYoutubeVideoDetail, "video_id" | "etag" | "kind" | "title">>;

/*
 * DB 컬럼 목록 For Youtube Video Update
 */
export type TYoutubeVideoDetailUpdate = {
  video_id: string;
} & Partial<Omit<TYoutubeVideoDetail, "video_id">>;



/*
 * DB 컬럼 목록 For Youtube Video List
 */
export const DB_COLUMNS_YOUTUBE_VIDEO_LIST = [
  "video_id",
  "etag",
  "kind",
  "title",
  "published_date",
  "channel_id",
  "channel_name",
  "language",
  "default_audio_language",
  "view_count",
  "like_count",
  "favorite_count",
  "comment_count",
  "created_at",
  "updated_at",
  "last_processed_at",
];


/*
 * DB 컬럼 목록 For Youtube Video Detail
 */
export const DB_COLUMNS_YOUTUBE_VIDEO_DETAIL = [
  ...DB_COLUMNS_YOUTUBE_VIDEO_LIST,
  "description",
  "channel_url",
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
];

