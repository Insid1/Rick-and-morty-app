import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IServerCharacter, IServerLocation } from '../../types/api-types/api-types';
import type { AppDispatch, RootState } from '../store';
import type { ICharacter, ILocation } from '../../types/data-types/data-types';
import { api } from '../../api/api';
import { adaptCharacterToClient, adaptLocationToClient } from '../../adapter/api-adapter';
import ApiRoutes from '../../api/api-routes';

interface IDataFromFetchLocation {
  locationCharacters: ICharacter[],
  location: ILocation,
}

const fetchLocation = createAsyncThunk<IDataFromFetchLocation, string, {
  dispatch: AppDispatch,
  state: RootState,
}>(
  'data/location',
  async (id: string) => {
    // add enums route to avoid direct assignment
    const { data: locationData } = await api.get<IServerLocation>(`${ApiRoutes.Location}${id}`);
    const adaptedLocation = adaptLocationToClient(locationData);
    // fetch characters on location
    const { charactersOnLocation } = adaptedLocation;
    const { data: charactersData } = await api.get<IServerCharacter[]>(`${ApiRoutes.Character}${charactersOnLocation.join()}`);
    const adaptedCharacters = charactersData.map(adaptCharacterToClient);
    return {
      location: adaptedLocation,
      locationCharacters: adaptedCharacters,
    };
  },
);

export { fetchLocation };
export type { IDataFromFetchLocation };
