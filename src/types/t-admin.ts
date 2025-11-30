/*
 * DB 컬럼 목록 For Admin
 */
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

/*
 * DB 컬럼 목록 For Admin Insert
 */
export type TAdminInsert = {
  email: string;
  pw: string;
} & Partial<Omit<TAdmin, "email" | "pw">>;

/*
 * DB 컬럼 목록 For Admin Update
 */
export type TAdminUpdate = {
  aid: string;
} & Partial<Omit<TAdmin, "aid">>;
