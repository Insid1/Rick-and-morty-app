import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { selectEpisodes } from '../../../store/episodes/selectors';
import { fetchEpisodes, fetchMoreEpisodes } from '../../../store/episodes/thunks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import EpisodeThumbnail from '../../common/episode-thumbnail/episode-thumbnail';

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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {episodes && episodes.map((episode) => (
          <Grid key={episode.id} item xs={3}>
            <EpisodeThumbnail episode={episode} />
          </Grid>
        ))}
      </Grid>
      <Waypoint onEnter={handleEnterWayPoint} />
    </>
  );
}

export default Main;
