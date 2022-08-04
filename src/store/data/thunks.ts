import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IServerEpisode, IServerResponseInfo } from '../../types/api-types/api-types';
import type { AppDispatch, RootState } from '../store';
import type { IEpisode } from '../../types/data-types/data-types';
import { api } from '../../api/api';
import { adaptEpisodeToClient } from '../../adapter/api-adapter';

interface IServerResponse {
  info: IServerResponseInfo,
  results: IServerEpisode[],
}

interface IDataFromFetchEpisodes {
  episodes: IEpisode[],
  nextPageLink: string | null,
}

interface IDataFromFetchMoreEpisodes extends IDataFromFetchEpisodes {
  prevPageLink: string | null,
}

const fetchEpisodes = createAsyncThunk<IDataFromFetchEpisodes, undefined, {
  dispatch: AppDispatch,
  state: RootState,
}>(
  'data/episodes',
  async () => {
    // add enums route to avoid direct assignment
    const response = await api.get<IServerResponse>('episode');
    const { data } = response;
    const { results: episodes, info } = data;
    return {
      episodes: episodes.map(adaptEpisodeToClient),
      nextPageLink: info.next,
    };
  },
);

const fetchMoreEpisodes = createAsyncThunk<IDataFromFetchMoreEpisodes | null, undefined, {
  dispatch: AppDispatch,
  state: RootState,
}>(
  'data/episodes/more',
  async (_, ThunkApi) => {
    const state = ThunkApi.getState();
    if (!state.DATA.nextPageEpisode) {
      return null;
    }
    const response = await api.get<IServerResponse>('', { baseURL: state.DATA.nextPageEpisode });
    const { data } = response;
    const { results: episodes, info } = data;
    return {
      episodes: episodes.map(adaptEpisodeToClient),
      nextPageLink: info.next,
      prevPageLink: info.prev,
    };
  },
);

export { fetchEpisodes, fetchMoreEpisodes };
export type { IDataFromFetchEpisodes, IDataFromFetchMoreEpisodes };
