import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IServerCharacter, IServerEpisode } from '../../types/api-types/api-types';
import type { AppDispatch, RootState } from '../store';
import type { ICharacter, IEpisode } from '../../types/data-types/data-types';
import { api } from '../../api/api';
import { adaptCharacterToClient, adaptEpisodeToClient } from '../../adapter/api-adapter';
import ApiRoutes from '../../api/api-routes';

interface IDataFromFetchEpisode {
  episode: IEpisode,
  charactersInEpisode: ICharacter[],
}

const fetchEpisode = createAsyncThunk<IDataFromFetchEpisode, string, {
  dispatch: AppDispatch,
  state: RootState,
}>(
  'data/episode',
  async (id: string) => {
    const response = await api.get<IServerEpisode>(`${ApiRoutes.Episode}${id}`);
    const { data: EpisodeData } = response;
    const adaptedEpisodeData = adaptEpisodeToClient(EpisodeData);

    // fetch data about characters in episode
    const charactersInEpisodeIds = adaptedEpisodeData.characters;
    const responseWithCharacters = await api.get<IServerCharacter[]>(`${ApiRoutes.Character}${charactersInEpisodeIds.join()}`);
    const { data: characters } = responseWithCharacters;
    const adaptedCharacters = characters.map(adaptCharacterToClient);

    return { episode: adaptedEpisodeData, charactersInEpisode: adaptedCharacters };
  },
);

export { fetchEpisode };
export type { IDataFromFetchEpisode };
