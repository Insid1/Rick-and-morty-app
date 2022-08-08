import EpisodesList from '@/components/common/episodes-list/episodes-list';
import GoBackLink from '@/components/common/go-back-link/go-back-link';
import LoaderErrorHandler from '@/components/common/loader-error-handler/loader-error-handler';
import SmallInfoLink from '@/components/common/small-info-link/small-info-link';
import SectionTitle from '@/components/common/UI/section-title/section-title';
import SmallInfo from '@/components/common/UI/small-info/small-info';
import TitleImg from '@/components/common/UI/title-img/title-img';
import AppRoutes from '@/router/app-routes';
import { selectCharacter, selectCharacterEpisodes, selectLoadCharacterError } from '@/store/character/selectors';
import { fetchCharacter } from '@/store/character/thunks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  Container, Typography, Stack,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Character() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const character = useAppSelector(selectCharacter);
  const characterEpisodes = useAppSelector(selectCharacterEpisodes);
  const loadingCharacterError = useAppSelector(selectLoadCharacterError);

  const locationId = character?.location?.id;

  useEffect(() => {
    if (id) {
      dispatch(fetchCharacter(id)).catch(() => {});
    }
  }, [dispatch, id]);
  return (
    <Container maxWidth="xl">
      <GoBackLink />
      {character
        ? (
          <>
            <TitleImg width={300} height={300} imgSrc={character.image} isImgRounded />
            <Typography textAlign="center" component="h1" variant="h3">{character.name}</Typography>
            <SectionTitle>Info</SectionTitle>
            <Stack
              justifyContent="space-evenly"
              alignItems="center"
              direction="column"
              spacing={2}
              margin={1}
            >
              <SmallInfo title="Gender" text={character.gender} />
              <SmallInfo title="Status" text={character.status} />
              <SmallInfo title="Specie" text={character.species} />
              <SmallInfo title="Origin" text={character.origin.name} />
              <SmallInfo title="Type" text={character.type} />
              {locationId
                ? (<SmallInfoLink to={`${AppRoutes.Location}${locationId}`} title="Location" text={character.location.name} />)
                : (<SmallInfo title="Location" text={character.location.name} />)}
            </Stack>
            <SectionTitle>Episodes</SectionTitle>
            {characterEpisodes && <EpisodesList episodes={characterEpisodes} />}
          </>
        )
        : <LoaderErrorHandler error={loadingCharacterError} />}
    </Container>

  );
}

export default Character;
