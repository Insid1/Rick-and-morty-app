import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IServerCharacter, IServerLocation } from '../../types/api-types/api-types';
import type { AppDispatch, RootState } from '../store';
import type { ICharacter, ILocation } from '../../types/data-types/data-types';
import { api } from '../../api/api';
import { adaptCharacterToClient, adaptLocationToClient } from '../../adapter/api-adapter';
import ApiRoutes from '../../api/api-routes';
import { UNEXPECTED_ERROR } from '../../consts/consts';

interface IDataFromFetchLocation {
  locationCharacters: ICharacter[],
  location: ILocation,
}

const fetchLocation = createAsyncThunk<IDataFromFetchLocation, string, {
  dispatch: AppDispatch,
  state: RootState,
  rejectValue: string,
}>(
  'data/location',
  async (id: string, { rejectWithValue }) => {
    try {
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
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(UNEXPECTED_ERROR);
    }
  },
);

export { fetchLocation };
export type { IDataFromFetchLocation };
