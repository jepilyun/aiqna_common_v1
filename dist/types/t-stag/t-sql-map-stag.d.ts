export type TSqlMapStag = {
    stag_code: string;
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
export type TSqlMapStagInsert = {
    stag_code: string;
    source_type: string;
    source_id: string;
} & Partial<Omit<TSqlMapStag, "stag_code" | "source_type" | "source_id">>;
export type TSqlMapStagUpdate = Partial<Omit<TSqlMapStag, "stag_code" | "source_type" | "source_id">>;
