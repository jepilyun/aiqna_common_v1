/*
 * DB 컬럼 목록 For Map District
 */
export type TSqlMapDistrict = {
  district_code: string;
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

export type TSqlMapDistrictInsert = {
  district_code: string;
  source_type: string;
  source_id: string;
} & Partial<Omit<TSqlMapDistrict, "district_code" | "source_type" | "source_id">>;

export type TSqlMapDistrictUpdate = Partial<Omit<TSqlMapDistrict, "district_code" | "source_type" | "source_id">>;

