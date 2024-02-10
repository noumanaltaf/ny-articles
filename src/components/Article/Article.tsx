import React, { useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { IArticleProps } from "./Article.properties";
import { PLACEHOLDER_IMAGE_URL } from "../../constants";
import { Link } from 'react-router-dom';
import { TypographyStyled } from "./Articls.style";

const Article = (props: IArticleProps) => {
    const { article } = props;

    const imageUrl = useMemo(
        () => {
            const firstMedia = article?.media?.shift();
            return firstMedia?.["media-metadata"]?.[firstMedia?.["media-metadata"]?.length - 1]?.url;
        },
        [article]
    );

    return (
        <Link to={`/detail/${article?.id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ width: 350, m: 2 }}>
                <CardMedia
                    component="img"
                    height="140"
                    src={imageUrl ?? PLACEHOLDER_IMAGE_URL}
                    alt="article image"
                />
                <CardContent>
                    <TypographyStyled color="text.secondary">
                        {article?.abstract}
                    </TypographyStyled>
                </CardContent>
            </Card>
        </Link>
    );
};

export default React.memo(Article);