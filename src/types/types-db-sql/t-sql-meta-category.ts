/*
 * DB 컬럼 목록 For Meta Category
 */
export type TSqlMetaCategory = {
  id: string;
  category_name: string;
  source_type: string;
  source_id: string;
  category_code: string | null;
  admin_message: string | null;
  is_processed: boolean;
  processed_at: string | null;
  created_at: string;
  updated_at: string;
};

export type TSqlMetaCategoryInsert = {
  id?: string | null;
} & Partial<Omit<TSqlMetaCategory, "id">>;

export type TSqlMetaCategoryUpdate = {
  id: string;
} & Partial<Omit<TSqlMetaCategory, "id">>;

