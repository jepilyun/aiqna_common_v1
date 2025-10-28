/*
 * DB 컬럼 목록 For Map Google Place
 */
export type TSqlMapGooglePlace = {
  google_place_id: string;
  source_type: string;
  source_id: string;
  confidence_score: number | null;
  extracted_at: string | null;
  extraction_method: string | null;
  is_verified: boolean;
  verified_at: string | null;
  verified_by: string | null;
  is_selected: boolean;
  order_num: number;
  added_at: string;
  updated_at: string;
};

export type TSqlMapGooglePlaceInsert = {
  google_place_id: string;
  source_type: string;
  source_id: string;
} & Partial<Omit<TSqlMapGooglePlace, "google_place_id" | "source_type" | "source_id">>;

export type TSqlMapGooglePlaceUpdate = {
  google_place_id: string;
  source_type: string;
  source_id: string;
} & Partial<Omit<TSqlMapGooglePlace, "google_place_id" | "source_type" | "source_id">>;