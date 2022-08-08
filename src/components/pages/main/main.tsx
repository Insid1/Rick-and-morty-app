import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import TitleImg from '@/components/common/UI/title-img/title-img';
import rickAndMortyImg from '@/assets/img/rick-and-morty2.png';
import EpisodesList from '@/components/common/episodes-list/episodes-list';
import LoaderErrorHandler from '@/components/common/loader-error-handler/loader-error-handler';
import { selectEpisodes, selectLoadEpisodesError } from '@/store/episodes/selectors';
import { fetchEpisodes, fetchMoreEpisodes } from '@/store/episodes/thunks';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import Filter from './components/filter';

function Main() {
  const episodes = useAppSelector(selectEpisodes);
  const dispatch = useAppDispatch();
  const loadingEpisodesError = useAppSelector(selectLoadEpisodesError);

  // first page rendered call
  useEffect(() => {
    dispatch(fetchEpisodes()).catch(() => {});
  }, [dispatch]);

  const handleEnterWayPoint = () => {
    dispatch(fetchMoreEpisodes()).catch(() => {});
  };
  return (
    <Container maxWidth="xl">
      <TitleImg imgSrc={rickAndMortyImg} width={270} height={210} />
      <Filter />
      {episodes.length
        ? (
          <>
            <EpisodesList episodes={episodes} />
            <Waypoint onEnter={handleEnterWayPoint} />
          </>
        )
        : <LoaderErrorHandler error={loadingEpisodesError} />}
      <br />
    </Container>
  );
}

export default Main;
