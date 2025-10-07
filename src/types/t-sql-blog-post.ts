/*
 * DB 컬럼 목록 For Blog Post
 */
export type TSqlBlogPostList = {
  id: string;
  blog_post_url: string;
  title: string;
  platform: string;
  platform_url: string;
  published_date: string | null;
  created_at: string;
  updated_at: string;
  last_processed_at: string | null;
  is_active: boolean;
  is_deleted: boolean;
};

/*
 * DB 컬럼 목록 For Youtube Video
 */
export type TSqlBlogPostDetail = TSqlBlogPostList & {
  featured_image_url: string;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  og_url: string | null;
  local_image_url: string | null;
  content: string;
  tags: string[];
  metadata_json: string | null;
  deleted_at: string | null;
};


/*
 * DB 컬럼 목록 For Youtube Video Insert
 */
export type TSqlBlogPostDetailInsert = {
  blog_post_url: string;
} & Partial<Omit<TSqlBlogPostDetail, "blog_post_url">>;

/*
 * DB 컬럼 목록 For Youtube Video Update
 */
export type TSqlBlogPostDetailUpdate = {
  id?: string;
  blog_post_url?: string;
} & Partial<Omit<TSqlBlogPostDetail, "id" | "blog_post_url">>;



/*
 * DB 컬럼 목록 For Youtube Video List
 */
export const SQL_DB_COLUMNS_BLOG_POST_LIST = [
  "id",
  "blog_post_url",
  "title",
  "platform",
  "platform_url",
  "published_date",
  "created_at",
  "updated_at",
  "last_processed_at",
  "is_active",
  "is_deleted",
];


/*
 * DB 컬럼 목록 For Youtube Video Detail
 */
export const SQL_DB_COLUMNS_BLOG_POST_DETAIL = [
  ...SQL_DB_COLUMNS_BLOG_POST_LIST,
  "featured_image_url",
  "og_title",
  "og_description",
  "og_image",
  "og_url",
  "local_image_url",
  "content",
  "tags",
  "metadata_json",
  "deleted_at",
];
