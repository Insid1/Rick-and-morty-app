import Link from '@mui/material/Link';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppRoutes from '../../../router/app-routes';
import { selectEpisode } from '../../../store/episode/selectors';
import { fetchEpisode } from '../../../store/episode/thunks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

function Episode() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const episode = useAppSelector(selectEpisode);

  useEffect(() => {
    // fetch episode with given id
    if (id) {
      dispatch(fetchEpisode(id)).catch(() => {});
    }
  }, [dispatch, id]);
  return (
    <>
      <Link href="/">Link</Link>
      {episode
        ? (
          <div className="container">
            <p>{episode.airDate}</p>
            <p>{episode.created}</p>
            <p>{episode.episode}</p>
            <p>{episode.id}</p>
            <p>{episode.name}</p>
            <p>{episode.url}</p>
            {episode.characters.map((charId) => (
              <Link key={charId} href={`${AppRoutes.Character}${charId}`}>
                Character id:
                {charId}
              </Link>
            ))}
          </div>
        )
        : <div>Loading...</div>}
    </>
  );
}

export default Episode;
