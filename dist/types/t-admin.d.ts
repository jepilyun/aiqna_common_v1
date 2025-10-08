export type TAdmin = {
    aid: string;
    email: string;
    pw: string;
    name: string | null;
    is_active: boolean;
    level: string | null;
    refresh_token: string | null;
    refresh_token_issued_at: Date | null;
    created_at: Date;
    created_by: string | null;
    last_accessed_at: Date;
    deactivated_at: Date | null;
    deactivated_by: string | null;
};
export type TAdminInsert = {
    email: string;
    pw: string;
} & Partial<Omit<TAdmin, "email" | "pw">>;
export type TAdminUpdate = {
    aid: string;
} & Partial<Omit<TAdmin, "aid">>;
