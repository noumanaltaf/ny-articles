import { useFetch } from "./queryService";
import { IFetchArticleApiResult } from "./types";
const API_KEY = 'ncygvR1JPAjcud5IkDGht691aVBgGwro';

export const useFetchMostViewedArticles = () => useFetch<IFetchArticleApiResult>(
    '1.json',
    { 'api-key': API_KEY },
    undefined,
    { staleTime: Infinity }
);