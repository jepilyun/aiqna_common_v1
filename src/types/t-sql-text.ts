/*
 * DB 컬럼 목록 For Blog Post
 */
export type TSqlTextList = {
  id: string;
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
export type TSqlTextDetailUpdate = {
  id?: string;
  hash_key?: string;
} & Partial<Omit<TSqlTextDetail, "id" | "hash_key">>;



/*
 * DB 컬럼 목록 For Youtube Video List
 */
export const SQL_DB_COLUMNS_TEXT_LIST = [
  "id",
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
  "metadata_json",
  "deleted_at",
];
