import Grid from '@mui/material/Grid';
import React from 'react';
import { IEpisode } from '../../../types/data-types/data-types';
import CardContainer from '../card-container/card-container';
import EpisodeThumbnail from '../episode-thumbnail/episode-thumbnail';

interface IEpisodesList {
  episodes : IEpisode[],
}

function EpisodesList({ episodes }: IEpisodesList) {
  return (
    <CardContainer component="ul">
      {episodes && episodes.map((episode) => (
        <Grid component="li" justifySelf="center" key={episode.id} item>
          <EpisodeThumbnail episode={episode} />
        </Grid>
      ))}
    </CardContainer>
  );
}

export default EpisodesList;
