import React from 'react';
import type { IEpisode } from '@/types/data-types/data-types';
import CardsContainer from '../UI/cards-container/cards-container';
import EpisodeThumbnail from '../episode-thumbnail/episode-thumbnail';

interface IEpisodesList {
  episodes : IEpisode[],
}

function EpisodesList({ episodes }: IEpisodesList) {
  return (
    <CardsContainer>
      {episodes && episodes.map((episode) => (
        <EpisodeThumbnail key={episode.id} episode={episode} />
      ))}
    </CardsContainer>
  );
}

export default EpisodesList;
