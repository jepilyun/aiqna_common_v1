export type TSqlPineconeVector = {
    id: string;
    source_type: string;
    source_id: string;
    vector_id: string;
    namespace: string | null;
    index_name: string | null;
    chunk_index: number | null;
    total_chunks: number | null;
    embedding_model: string | null;
    embedding_dimension: number;
    chunk_text: string | null;
    chunk_tokens: number | null;
    status: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
};
export type TSqlPineconeVectorInsert = {
    source_id: string;
} & Partial<Omit<TSqlPineconeVector, "source_id" | "id">>;
export type TSqlPineconeVectorUpdate = Partial<Omit<TSqlPineconeVector, "source_id" | "id">>;
