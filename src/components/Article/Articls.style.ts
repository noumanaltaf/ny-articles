import { styled } from 'styled-components';
import Typography from "@mui/material/Typography";

export const TypographyStyled = styled(Typography)`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    display: -webkit-flex;
    display: flex;
    -webkit-line-clamp: 3;
    max-height: 3em; 
`;
