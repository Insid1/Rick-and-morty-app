import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { selectEpisodes } from '../../../store/episodes/selectors';
import { fetchEpisodes, fetchMoreEpisodes } from '../../../store/episodes/thunks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import rickAndMortyImg from '../../../assets/img/rick-and-morty2.png';
import TitleImg from '../../common/UI/title-img/title-img';
import TextfieldFilter from '../../common/UI/textfield-filter/textfield-filter';
import EpisodesList from '../../common/episodes-list/episodes-list';

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
    <Container maxWidth="xl">
      <TitleImg imgSrc={rickAndMortyImg} width={270} height={210} />
      <TextfieldFilter label="Filter by name or episode (ex. S01 or S01E02)" />
      <EpisodesList episodes={episodes} />
      <Waypoint onEnter={handleEnterWayPoint} />
    </Container>
  );
}

export default Main;
