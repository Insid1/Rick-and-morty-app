import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IServerLocation } from '../../types/api-types/api-types';
import type { AppDispatch, RootState } from '../store';
import type { ILocation } from '../../types/data-types/data-types';
import { api } from '../../api/api';
import { adaptLocationToClient } from '../../adapter/api-adapter';

const fetchLocation = createAsyncThunk<ILocation, string, {
  dispatch: AppDispatch,
  state: RootState,
}>(
  'data/location',
  async (id: string) => {
    // add enums route to avoid direct assignment
    const response = await api.get<IServerLocation>(`location/${id}`);
    const { data } = response;
    return adaptLocationToClient(data);
  },
);

export { fetchLocation };
