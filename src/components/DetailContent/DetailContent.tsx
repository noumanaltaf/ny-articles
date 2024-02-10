import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { DetailContainer, Label } from './DetailContent.style';
import Typography from '@mui/material/Typography';
import { IDetailContentProps } from './DetailContent.properties';

const DetailContent = ({ article }: IDetailContentProps) => {

    const keywords = useMemo(() => article?.adx_keywords?.replace(',', '')?.split(';') ?? [], [article]);
    return article ? (
        <DetailContainer>
            <Typography variant="h5" gutterBottom>
                {article?.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {article?.abstract}
            </Typography>
            <br />
            <Label variant="body2" color="textSecondary">
                Keywords:
            </Label>
            <br />
            <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
                {keywords.map((keyword) => (
                    <Chip key={keyword} label={keyword} sx={{ margin: '2px' }} />
                ))}
            </Box>
        </DetailContainer>
    ) : (
        <Typography variant="h5" textAlign={'center'}>
            No Data
        </Typography>
    );
};

export default React.memo(DetailContent);