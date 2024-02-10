import React, { useEffect, useState } from 'react';
import { IArticleProps } from './ArticleList.properties';
import { fetchMostViewedArticles } from '../../api/article';
import { IArticle } from '../../api/types';

const Article = (props: IArticleProps) => {
    const { onArticleClick } = props;
    const [loading, setLoading] = useState<boolean>(false);
    const [articles, setArticles] = useState<IArticle[]>([]);

    useEffect(
        () => {
            setLoading(true);
            fetchMostViewedArticles()
                .then((response) => {
                    if (response?.status === 'OK') {
                        setArticles(response.results);
                    }
                })
                .catch((err) => console.warn(err))
                .finally(() => setLoading(false));
        },
        []
    );

    return loading ? (
        <div>loading articles...</div>
    ) : (
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