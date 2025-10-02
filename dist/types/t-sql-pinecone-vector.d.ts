export type TSqlPineconeVector = {
    id: string;
    source_type: string;
    source_id: string;
    vector_id: string;
    namespace: string;
    index_name: string;
    chunk_index: number;
    total_chunks: number;
    embedding_model: string;
    status: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
};
export type TSqlPineconeVectorInsert = {
    vector_id: string;
} & Partial<Omit<TSqlPineconeVector, "vector_id">>;
export type TSqlPineconeVectorUpdate = {
    id?: string;
    vector_id?: string;
} & Partial<Omit<TSqlPineconeVector, "id" | "vector_id">>;
