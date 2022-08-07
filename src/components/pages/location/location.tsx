import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TitleImage from '../../../assets/img/rick-and-morty1.png';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectLoadLocationError, selectLocation, selectLocationCharacters } from '../../../store/location/selectors';
import { fetchLocation } from '../../../store/location/thunks';
import GoBackLink from '../../common/go-back-link/go-back-link';
import TitleImg from '../../common/UI/title-img/title-img';
import SmallInfo from '../../common/UI/small-info/small-info';
import SectionTitle from '../../common/UI/section-title/section-title';
import CardsContainer from '../../common/UI/cards-container/cards-container';
import CharacterThumbnail from '../../common/character-thumbnail/character-thumbnail';
import LoaderErrorHandler from '../../common/loader-error-handler/loader-error-handler';

function Location() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const location = useAppSelector(selectLocation);
  const locationCharacters = useAppSelector(selectLocationCharacters);
  const loadingLocationError = useAppSelector(selectLoadLocationError);

  useEffect(() => {
    if (id) {
      dispatch(fetchLocation(id)).catch(() => {});
    }
  }, [dispatch, id]);
  return (
    <Container maxWidth="xl">
      <GoBackLink />
      <TitleImg width={320} height={200} imgSrc={TitleImage} />
      {location
        ? (
          <>
            <Typography textAlign="center" component="h1" variant="h3">{location.name}</Typography>
            <Stack
              justifyContent="space-evenly"
              alignItems="center"
              direction="row"
              spacing={2}
              margin={2}
            >
              <SmallInfo title="Type" text={location.type} />
              <SmallInfo title="Dimension" text={location.dimension} />
            </Stack>
            <SectionTitle>Characters on location</SectionTitle>
            <CardsContainer>
              {locationCharacters.map((char) => (<CharacterThumbnail key={char.id} {...char} />))}
            </CardsContainer>
          </>
        )
        : <LoaderErrorHandler error={loadingLocationError} />}
    </Container>
  );
}

export default Location;
