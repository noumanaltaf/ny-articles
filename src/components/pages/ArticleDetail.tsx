import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import DetailContent from '../DetailContent';
import { useFetchMostViewedArticles } from '../../api/article';

const ArticleDetail = () => {
    const { id = 0 } = useParams();
    const articles = useFetchMostViewedArticles();

    const articleData = useMemo(() => articles.data?.results?.find((a) => a.id === Number(id)), [articles.data])

    return (<DetailContent article={articleData} />);
};

export default ArticleDetail;
