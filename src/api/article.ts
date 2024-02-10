import { IFetchArticleApiResult } from "./types";
import { get } from "./util"

export const fetchMostViewedArticles = (): Promise<IFetchArticleApiResult> => {
    return get('1.json');
}