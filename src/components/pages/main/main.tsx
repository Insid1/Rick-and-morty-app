import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchEpisodes, fetchMoreEpisodes } from '../../../store/data/thunks';
import { useAppDispatch } from '../../../store/hooks';

function Main() {
  const dispatch = useAppDispatch();
  // first page rendered call
  useEffect(() => {
    dispatch(fetchEpisodes()).catch(() => {});
  }, [dispatch]);
  // temp effe to load more episodes
  const handleClick = () => {
    dispatch(fetchMoreEpisodes()).catch(() => {});
  };
  return (
    <>
      <div>
        <Link to="/character/1">character</Link>
      </div>
      <div>
        <Link to="/episode/2">episode</Link>
      </div>
      <div>
        <Link to="/location/3">location</Link>
      </div>
      <button onClick={handleClick} type="button">load more</button>
    </>
  );
}

export default Main;
