export type ResponseDBSelect<T> = {
    data: T;
    count?: number;
    apiUrl?: string | null;
};
type ResponseListBase = {
    start: number;
    limit: number;
    total: number;
    hasMore: boolean;
};
export type ResponseItemsPaired<TMap, TContent> = {
    items: Array<{
        map: TMap;
        content: TContent;
    }>;
} & ResponseListBase;
export type ResponseItemsFlat<TContent> = {
    items: TContent[];
} & ResponseListBase;
/**
 * Response City Detail For Admin
 */
/**
 * Response City For Public
 */
/**
 * Response Content Detail For Admin
 */
/**
 * Response Content Detail For Public
 */
export type ResponseAianaAPI<T> = {
    success: boolean;
    alarm?: string | null;
    status?: string | null;
    msg?: string | null;
    dbResponse?: T | null | undefined;
    error?: string | null;
    missingFields?: string[] | string | null;
};
export {};
