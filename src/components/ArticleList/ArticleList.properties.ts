import { IArticle } from "../../api/types";

export interface IArticleProps {
    onArticleClick(article: IArticle): void;
}