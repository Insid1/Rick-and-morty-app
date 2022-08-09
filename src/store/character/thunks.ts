import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { ICharacter, IEpisode } from '@/types/data-types/data-types';
import { api } from '@/api/api';
import { adaptCharacterToClient, adaptEpisodeToClient } from '@/adapter/api-adapter';
import ApiRoutes from '@/api/api-routes';
import { UNEXPECTED_ERROR } from '@/consts/consts';
import type { IServerCharacter, IServerEpisode } from '@/types/api-types/api-types';
import type { AppDispatch, RootState } from '../store';

interface IDataFromFetchCharacter {
  characterEpisodes: IEpisode[],
  character: ICharacter,
}

const fetchCharacter = createAsyncThunk<IDataFromFetchCharacter, string, {
  dispatch: AppDispatch,
  state: RootState,
  rejectValue: string,
}>(
  'data/character',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data: characterData } = await api.get<IServerCharacter>(`${ApiRoutes.Character}/${id}`);
      const adaptedCharacter = adaptCharacterToClient(characterData);
      // fetch episodes where character been in
      const { episode } = adaptedCharacter;
      let { data: episodesData } = await api.get<IServerEpisode[] | IServerEpisode>(`${ApiRoutes.Episode}${episode.join()}`);

      // create array so if there is only 1 episode functionality will work
      if (!Array.isArray(episodesData)) {
        episodesData = [episodesData];
      }
      const adaptedEpisodes = episodesData.map(adaptEpisodeToClient);
      return { character: adaptedCharacter, characterEpisodes: adaptedEpisodes };
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(UNEXPECTED_ERROR);
    }
  },
);

export { fetchCharacter };
export type { IDataFromFetchCharacter };
