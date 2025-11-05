import { TTravelTipItem } from "../t-travel-tip.js";
export type TSqlTextList = {
    hash_key: string;
    title: string;
    created_at: string;
    updated_at: string;
    last_processed_at: string | null;
    is_active: boolean;
    is_deleted: boolean;
};
export type TSqlTextDetail = TSqlTextList & {
    content: string;
    info_country: string[] | null;
    info_city: string[] | null;
    info_district: string[] | null;
    info_neighborhood: string[] | null;
    info_landmark: string[] | null;
    info_category: string[] | null;
    info_name: string[] | null;
    info_special_tag: string[] | null;
    info_influencer: string[] | null;
    info_season: string[] | null;
    info_time_of_day: string[] | null;
    info_activity_type: string[] | null;
    info_reservation_required: boolean;
    info_travel_tips: TTravelTipItem[] | null;
    metadata_json: string | null;
    deleted_at: string | null;
};
export type TSqlTextDetailInsert = {
    hash_key: string;
} & Partial<Omit<TSqlTextDetail, "hash_key">>;
export type TSqlTextDetailUpdate = Partial<Omit<TSqlTextDetail, "hash_key">>;
export declare const SQL_DB_COLUMNS_TEXT_LIST: string[];
export declare const SQL_DB_COLUMNS_TEXT_DETAIL: string[];
