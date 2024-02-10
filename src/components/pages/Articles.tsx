import React from 'react';
import ArticleGrid from '../ArticleGrid';
import Typography from '@mui/material/Typography';
import { useFetchMostViewedArticles } from '../../api/article';
import { isNull } from '../../helpers';

const Articles = () => {
    const articles = useFetchMostViewedArticles();

    return (
        <div>
            <Typography variant="h3" gutterBottom textAlign={'center'}>
                Articles
            </Typography>
            <p>{articles.isFetched && isNull(articles.data) && 'Check API_KEY, unable to fetch data'}</p>
            <ArticleGrid loading={articles.isLoading} articles={articles?.data?.results ?? []} />
        </div>
    );
};

export default Articles;