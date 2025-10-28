/*
 * DB 컬럼 목록 For Meta Stag
 */
export type TSqlTempStagData = {
  id: string;
  stag_name: string;
  source_type: string;
  source_id: string;
  stag_code: string | null;
  admin_message: string | null;
  is_processed: boolean;
  processed_at: string | null;
  created_at: string;
  updated_at: string;
};

export type TSqlTempStagDataInsert = {
  id?: string | null;
} & Partial<Omit<TSqlTempStagData, "id">>;

export type TSqlTempStagDataUpdate = Partial<Omit<TSqlTempStagData, "id">>;