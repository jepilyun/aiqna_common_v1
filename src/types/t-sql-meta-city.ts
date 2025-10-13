/*
 * DB 컬럼 목록 For Meta City
 */
export type TSqlMetaCity = {
  id: string;
  city_name: string;
  source_type: string;
  source_id: string;
  city_code: string | null;
  admin_message: string | null;
  is_processed: boolean;
  processed_at: string | null;
  created_at: string;
  updated_at: string;
};

export type TSqlMetaCityInsert = {
  id?: string | null;
} & Partial<Omit<TSqlMetaCity, "id">>;

export type TSqlMetaCityUpdate = {
  id: string;
} & Partial<Omit<TSqlMetaCity, "id">>;