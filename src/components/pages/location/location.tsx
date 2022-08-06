import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppRoutes from '../../../router/app-routes';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectLocation } from '../../../store/location/selectors';
import { fetchLocation } from '../../../store/location/thunks';

function Location() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const location = useAppSelector(selectLocation);

  useEffect(() => {
    if (id) {
      dispatch(fetchLocation(id)).catch(() => {});
    }
  }, [dispatch, id]);
  return (
    location
      ? (
        <div className="container">
          <p>{location.name}</p>
          <p>{location.id}</p>
          <p>{location.type}</p>
          <p>{location.created}</p>
          <div>
            {location.charactersOnLocation.map((characterId) => (
              <p key={characterId}>
                <Link to={`${AppRoutes.Character}${characterId}`}>
                  character id:
                  {' '}
                  {characterId}
                </Link>
              </p>
            ))}
          </div>
        </div>
      )
      : (<div>Loading...</div>)
  );
}

export default Location;
