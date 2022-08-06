import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { EpisodeThumbnailStyled } from './episode-thumbnail.styled';
import { IEpisode } from '../../../types/data-types/data-types';
import AppRoutes from '../../../router/app-routes';

export default function EpisodeThumbnail({ episode } : { episode: IEpisode }) {
  const formattedDate = dayjs(episode.created).format('D MMMM YYYY');
  return (
    <Link to={`${AppRoutes.Episode}${episode.id}`}>
      <EpisodeThumbnailStyled sx={{ p: 1 }}>
        <Typography align="center" variant="h6">{episode.name}</Typography>
        <Typography variant="subText">{formattedDate}</Typography>
        <Typography variant="emphasizedSubText">{episode.episode}</Typography>
      </EpisodeThumbnailStyled>
    </Link>

  );
}
