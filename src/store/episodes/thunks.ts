import { adaptEpisodeToClient } from '@/adapter/api-adapter';
import { api } from '@/api/api';
import ApiRoutes from '@/api/api-routes';
import { UNEXPECTED_ERROR } from '@/consts/consts';
import type { IServerResponseInfo, IServerEpisode } from '@/types/api-types/api-types';
import type { IEpisode } from '@/types/data-types/data-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppDispatch, RootState } from '../store';

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
  rejectValue: string,
}>(
  'data/episodes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<IServerResponse>(ApiRoutes.Episode);
      const { data } = response;
      const { results: episodes, info } = data;
      return {
        episodes: episodes.map(adaptEpisodeToClient),
        nextPageLink: info.next,
      };
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(UNEXPECTED_ERROR);
    }
  },
);

const fetchMoreEpisodes = createAsyncThunk<IDataFromFetchMoreEpisodes | null, undefined, {
  dispatch: AppDispatch,
  state: RootState,
}>(
  'data/episodes/more',
  async (_, ThunkApi) => {
    const state = ThunkApi.getState();
    if (!state.EPISODES.nextPageEpisode) {
      return null;
    }
    const response = await api.get<IServerResponse>('', { baseURL: state.EPISODES.nextPageEpisode });
    const { data } = response;
    const { results: episodes, info } = data;
    return {
      episodes: episodes.map(adaptEpisodeToClient),
      nextPageLink: info.next,
      prevPageLink: info.prev,
    };
  },
);
const fetchEpisodesWithQuery = createAsyncThunk<IDataFromFetchEpisodes, string, {
  dispatch: AppDispatch,
  state: RootState,
  rejectValue: string,
}>(
  'data/episodes/query',
  async (queryString, { rejectWithValue }) => {
    try {
      const response = await api.get<IServerResponse>(`${ApiRoutes.Episode}${queryString}`);
      const { data } = response;
      const { results: episodes, info } = data;
      return {
        episodes: episodes.map(adaptEpisodeToClient),
        nextPageLink: info.next,
      };
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(UNEXPECTED_ERROR);
    }
  },
);

export { fetchEpisodes, fetchMoreEpisodes, fetchEpisodesWithQuery };
export type { IDataFromFetchEpisodes, IDataFromFetchMoreEpisodes };
