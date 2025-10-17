/*
 * DB 컬럼 목록 For Meta Street
 */
export type TSqlMetaStreet = {
  id: string;
  street_name: string;
  city_name: string;
  source_type: string;
  source_id: string;
  street_code: string | null;
  admin_message: string | null;
  is_processed: boolean;
  processed_at: string | null;
  created_at: string;
  updated_at: string;
};

export type TSqlMetaStreetInsert = {
  id?: string | null;
} & Partial<Omit<TSqlMetaStreet, "id">>;

export type TSqlMetaStreetUpdate = {
  id: string;
} & Partial<Omit<TSqlMetaStreet, "id">>;

