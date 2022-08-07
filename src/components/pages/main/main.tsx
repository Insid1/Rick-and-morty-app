import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { selectEpisodes } from '../../../store/episodes/selectors';
import { fetchEpisodes, fetchMoreEpisodes } from '../../../store/episodes/thunks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import Header from '../../common/header/header';
import rickAndMortyImg from '../../../assets/img/rick-and-morty2.png';
import TitleImg from '../../common/title-img/title-img';
import CardContainer from '../../common/card-container/card-container';
import TextfieldFilter from '../../common/textfield-filter/textfield-filter';
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
    <>
      <Header />
      <Container maxWidth="xl">
        <TitleImg imgSrc={rickAndMortyImg} width={270} height={210} />
        <TextfieldFilter label="Filter by name or episode (ex. S01 or S01E02)" />
        <CardContainer component="ul">
          <EpisodesList episodes={episodes} />
        </CardContainer>
      </Container>
      <Waypoint onEnter={handleEnterWayPoint} />
    </>
  );
}

export default Main;
