import { Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectCharactersInEpisode, selectEpisode } from '../../../store/episode/selectors';
import { fetchEpisode } from '../../../store/episode/thunks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { formatDate } from '../../../utils/date';
import CharacterThumbnail from '../../common/character-thumbnail/character-thumbnail';
import GoBackLink from '../../common/go-back-link/go-back-link';
import CardsContainer from '../../common/UI/cards-container/cards-container';
import SectionTitle from '../../common/UI/section-title/section-title';
import SmallInfo from '../../common/UI/small-info/small-info';

function Episode() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const episode = useAppSelector(selectEpisode);
  const charsInEpisode = useAppSelector(selectCharactersInEpisode);

  useEffect(() => {
    // fetch episode with given id
    if (id) {
      dispatch(fetchEpisode(id)).catch(() => {});
    }
  }, [dispatch, id]);
  return (
    episode
      ? (
        <Container maxWidth="xl">
          <GoBackLink />
          <Typography textAlign="center" component="h1" variant="h3">{episode.name}</Typography>
          <Stack
            justifyContent="space-evenly"
            alignItems="center"
            direction="row"
            spacing={2}
            margin={2}
          >
            <SmallInfo title="Episode" text={episode.episode} />
            <SmallInfo title="Date" text={formatDate(episode.created)} />
          </Stack>
          <SectionTitle>Cast</SectionTitle>
          <CardsContainer>
            {charsInEpisode.map((char) => (<CharacterThumbnail key={char.id} {...char} />))}
          </CardsContainer>
        </Container>
      )
      : <div>Loading...</div>
  );
}

export default Episode;
