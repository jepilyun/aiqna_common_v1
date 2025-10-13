/*
 * DB 컬럼 목록 For Meta Street
 */
export type TSqlMetaGooglePlace = {
  id: string;
  place_name: string;
  city_name: string;
  source_type: string;
  source_id: string;
  google_place_id: string | null;
  admin_message: string | null;
  is_processed: boolean;
  processed_at: string | null;
  created_at: string;
  updated_at: string;
};

export type TSqlMetaGooglePlaceInsert = {
  id?: string | null;
} & Partial<Omit<TSqlMetaGooglePlace, "id">>;

export type TSqlMetaGooglePlaceUpdate = {
  id: string;
} & Partial<Omit<TSqlMetaGooglePlace, "id">>;

