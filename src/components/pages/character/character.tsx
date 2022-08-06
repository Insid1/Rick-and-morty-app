import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppRoutes from '../../../router/app-routes';
import { selectCharacter } from '../../../store/character/selectors';
import { fetchCharacter } from '../../../store/character/thunks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

function Character() {
  const dispatch = useAppDispatch();
  const character = useAppSelector(selectCharacter);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCharacter(id)).catch(() => {});
    }
  }, [dispatch, id]);
  return (
    character
      ? (
        <div>
          <img width={300} height={300} src={character.image} alt="character avatar" />
          <p>{character.name}</p>
          <p>{character.origin.name}</p>
          <p>{character.origin.url}</p>
          <p>{character.created}</p>
          <p>{character.episode}</p>
          <p>{character.gender}</p>
          <p>{character.id}</p>
          <p><Link to={`${AppRoutes.Location}${character.location.id as number}`}>{character.location.name}</Link></p>
          {character.episode.map((episodeId) => (
            <p key={episodeId}>
              <Link to={`${AppRoutes.Episode}${episodeId}`}>
                Episode
                {' '}
                {episodeId}
              </Link>
            </p>
          ))}
        </div>
      )
      : (<div>Loading...</div>)

  );
}

export default Character;
