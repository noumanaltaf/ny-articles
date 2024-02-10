import React from 'react';
import { IArticleGridProps } from './ArticleGrid.properties';
import Grid from '@mui/material/Grid';
import Article from '../Article';
import { range } from '../../helpers';
import ArticleSkeleton from '../Article/ArticleSkeleton';

const ArticleGrid = ({ loading, articles }: IArticleGridProps) => {
    return (
        <Grid justifyContent={'center'} container wrap="wrap">
            {loading && range(1, 10).map((i) => <ArticleSkeleton key={i} />)}
            {articles?.map((article, idx) => <Article key={idx} article={article} />)}
        </Grid >
    );
};

export default React.memo(ArticleGrid);