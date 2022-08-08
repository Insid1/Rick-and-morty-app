import CharacterThumbnail from '@/components/common/character-thumbnail/character-thumbnail';
import GoBackLink from '@/components/common/go-back-link/go-back-link';
import LoaderErrorHandler from '@/components/common/loader-error-handler/loader-error-handler';
import CardsContainer from '@/components/common/UI/cards-container/cards-container';
import SectionTitle from '@/components/common/UI/section-title/section-title';
import SmallInfo from '@/components/common/UI/small-info/small-info';
import { selectEpisode, selectCharactersInEpisode, selectLoadEpisodeError } from '@/store/episode/selectors';
import { fetchEpisode } from '@/store/episode/thunks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { formatDate } from '@/utils/date';
import { Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Episode() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const episode = useAppSelector(selectEpisode);
  const charsInEpisode = useAppSelector(selectCharactersInEpisode);
  const loadingEpisodeError = useAppSelector(selectLoadEpisodeError);

  useEffect(() => {
    // fetch episode with given id
    if (id) {
      dispatch(fetchEpisode(id)).catch(() => {});
    }
  }, [dispatch, id]);
  return (
    <Container maxWidth="xl">
      <GoBackLink />
      {episode
        ? (
          <>
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
          </>
        )
        : <LoaderErrorHandler error={loadingEpisodeError} />}
    </Container>
  );
}

export default Episode;
