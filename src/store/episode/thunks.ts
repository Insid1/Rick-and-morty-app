import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IServerCharacter, IServerEpisode } from '@/types/api-types/api-types';
import type { ICharacter, IEpisode } from '@/types/data-types/data-types';
import { adaptCharacterToClient, adaptEpisodeToClient } from '@/adapter/api-adapter';
import ApiRoutes from '@/api/api-routes';
import { UNEXPECTED_ERROR } from '@/consts/consts';
import { api } from '@/api/api';
import type { AppDispatch, RootState } from '../store';

interface IDataFromFetchEpisode {
  episode: IEpisode,
  charactersInEpisode: ICharacter[],
}

const fetchEpisode = createAsyncThunk<IDataFromFetchEpisode, string, {
  dispatch: AppDispatch,
  state: RootState,
  rejectValue: string,
}>(
  'data/episode',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data: episodeData } = await api.get<IServerEpisode>(`${ApiRoutes.Episode}${id}`);
      const adaptedEpisodeData = adaptEpisodeToClient(episodeData);

      // fetch data about characters in episode
      const charactersInEpisodeIds = adaptedEpisodeData.characters;

      const { data: characters } = await api.get<IServerCharacter[]>(`${ApiRoutes.Character}${charactersInEpisodeIds.join()}`);
      const adaptedCharacters = characters.map(adaptCharacterToClient);

      return { episode: adaptedEpisodeData, charactersInEpisode: adaptedCharacters };
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(UNEXPECTED_ERROR);
    }
  },
);

export { fetchEpisode };
export type { IDataFromFetchEpisode };
