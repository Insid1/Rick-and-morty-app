import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { selectEpisodes } from '../../../store/episodes/selectors';
import { fetchEpisodes, fetchMoreEpisodes } from '../../../store/episodes/thunks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import EpisodeThumbnail from '../../common/episode-thumbnail/episode-thumbnail';
import Header from '../../common/header/header';

function Main() {
  const episodes = useAppSelector(selectEpisodes);
  const dispatch = useAppDispatch();

  // first page rendered call
  useEffect(() => {
    dispatch(fetchEpisodes()).catch(() => {});
  }, [dispatch]);

  const handleEnterWayPoint = () => {
    dispatch(fetchMoreEpisodes()).catch(() => {});
  };
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid
          container
          // rowSpacing={1}
          justifyContent="center"
          gap={5}
          columnSpacing={{
            xs: 1, sm: 2, md: 3, xl: 4,
          }}
        >
          {episodes && episodes.map((episode) => (
            <Grid justifySelf="center" key={episode.id} item>
              <EpisodeThumbnail episode={episode} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Waypoint onEnter={handleEnterWayPoint} />
    </>
  );
}

export default Main;
