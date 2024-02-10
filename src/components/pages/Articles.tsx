import React from 'react';
import ArticleGrid from '../ArticleGrid';
import Typography from '@mui/material/Typography';
import { useFetchMostViewedArticles } from '../../api/article';

const Articles = () => {
    const articles = useFetchMostViewedArticles();

    return (
        <div>
            <Typography variant="h3" gutterBottom textAlign={'center'}>
                Articles
            </Typography>
            <ArticleGrid loading={articles.isLoading} articles={articles?.data?.results ?? []} />
        </div>
    );
};

export default Articles;