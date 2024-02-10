import { Article } from "../../api/types";

export interface IArticleProps {
    articles: Article[],
    onArticleClick(article: Article): void;
}