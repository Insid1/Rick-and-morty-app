import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import AppRoutes from '../../../router/app-routes';
import { selectEpisodes } from '../../../store/episodes/selectors';
import { fetchEpisodes, fetchMoreEpisodes } from '../../../store/episodes/thunks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

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
      {episodes ? episodes.map((episode) => (
        <div
          className="container"
          key={episode.id}
        >
          <span>{episode.episode}</span>
          <span>{episode.airDate}</span>
          <span>{episode.characters}</span>
          <span>{episode.name}</span>
          <span>{episode.url}</span>
          <br />
          <Link to={`${AppRoutes.Episode}${episode.id}`}>{episode.id}</Link>
        </div>
      )) : ''}
      <div>
        <Link to="/character/1">character</Link>
      </div>
      <div>
        <Link to="/episode/2">episode</Link>
      </div>
      <div>
        <Link to="/location/3">location</Link>
      </div>
      <Waypoint onEnter={handleEnterWayPoint} />
    </>
  );
}

export default Main;
