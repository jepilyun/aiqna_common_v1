/*
 * DB 컬럼 목록 For Meta Content
 */
export type TSqlTempContentData = {
  id: string;
  content_name: string;
  city_name: string;
  source_type: string;
  source_id: string;
  content_code: string | null;
  admin_message: string | null;
  is_processed: boolean;
  processed_at: string | null;
  created_at: string;
  updated_at: string;
};

export type TSqlTempContentDataInsert = {
  id?: string | null;
} & Partial<Omit<TSqlTempContentData, "id">>;

export type TSqlTempContentDataUpdate = Omit<TSqlTempContentData, "id">;

