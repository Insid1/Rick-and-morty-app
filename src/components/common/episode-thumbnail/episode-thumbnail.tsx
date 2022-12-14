import React, { memo } from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AppRoutes from '@/router/app-routes';
import { IEpisode } from '@/types/data-types/data-types';
import { formatDate } from '@/utils/date';
import { EpisodeThumbnailStyled } from './episode-thumbnail.styled';

function EpisodeThumbnail({ episode } : { episode: IEpisode }) {
  return (
    <Grid component="li" justifySelf="center" item>
      <Link to={`${AppRoutes.Episode}${episode.id}`}>
        <EpisodeThumbnailStyled sx={{ p: 1 }}>
          <Typography align="center" variant="h6">{episode.name}</Typography>
          <Typography variant="subText">{formatDate(episode.created)}</Typography>
          <Typography variant="emphasizedSubText">{episode.episode}</Typography>
        </EpisodeThumbnailStyled>
      </Link>
    </Grid>

  );
}

export default memo(EpisodeThumbnail);
