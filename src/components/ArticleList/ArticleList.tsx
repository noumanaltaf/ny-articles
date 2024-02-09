import React from 'react';
import { IArticleProps } from './ArticleList.properties';

const Article = (props: IArticleProps) => {
    const { articles, onArticleClick } = props;

    return (
        <div>
            <h2>List of Articles</h2>
            <ul>
                {articles.map(article => (
                    <li key={article.id} onClick={() => onArticleClick(article)}>
                        {article.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Article;