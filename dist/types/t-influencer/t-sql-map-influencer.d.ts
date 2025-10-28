export type TSqlMapInfluencer = {
    influencer_id: number;
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
export type TSqlMapInfluencerInsert = {
    influencer_id: number;
    source_type: string;
    source_id: string;
} & Partial<Omit<TSqlMapInfluencer, "influencer_id" | "source_type" | "source_id">>;
export type TSqlMapInfluencerUpdate = Partial<Omit<TSqlMapInfluencer, "influencer_id" | "source_type" | "source_id">>;
