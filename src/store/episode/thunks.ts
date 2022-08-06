import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IServerEpisode } from '../../types/api-types/api-types';
import type { AppDispatch, RootState } from '../store';
import type { IEpisode } from '../../types/data-types/data-types';
import { api } from '../../api/api';
import { adaptEpisodeToClient } from '../../adapter/api-adapter';

const fetchEpisode = createAsyncThunk<IEpisode, string, {
  dispatch: AppDispatch,
  state: RootState,
}>(
  'data/episode',
  async (id: string) => {
    // add enums route to avoid direct assignment
    const response = await api.get<IServerEpisode>(`episode/${id}`);
    const { data } = response;
    return adaptEpisodeToClient(data);
  },
);

export { fetchEpisode };
