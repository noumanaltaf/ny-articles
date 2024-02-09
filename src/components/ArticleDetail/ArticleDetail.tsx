import React from 'react';
import { IArticleDetailProps } from './ArticleDetail.properties';

const ArticleDetail = ({ article }: IArticleDetailProps) => {
    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleDetail;