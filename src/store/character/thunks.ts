import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IServerCharacter, IServerEpisode } from '../../types/api-types/api-types';
import type { AppDispatch, RootState } from '../store';
import type { ICharacter, IEpisode } from '../../types/data-types/data-types';
import { api } from '../../api/api';
import { adaptCharacterToClient, adaptEpisodeToClient } from '../../adapter/api-adapter';

interface IDataFromFetchCharacter {
  characterEpisodes: IEpisode[],
  character: ICharacter,
}

const fetchCharacter = createAsyncThunk<IDataFromFetchCharacter, string, {
  dispatch: AppDispatch,
  state: RootState,
}>(
  'data/character',
  async (id: string) => {
    // add enums route to avoid direct assignment
    const response = await api.get<IServerCharacter>(`character/${id}`);
    const { data: characterData } = response;
    const adaptedCharacter = adaptCharacterToClient(characterData);
    // fetch episodes where character been in
    const { episode } = adaptedCharacter;
    let { data: episodesData } = await api.get<IServerEpisode[] | IServerEpisode>(`episode/${episode.join()}`);

    // create array so if there is only 1 episode functionality will work
    if (!Array.isArray(episodesData)) {
      episodesData = [episodesData];
    }
    const adaptedEpisodes = episodesData.map(adaptEpisodeToClient);
    return { character: adaptedCharacter, characterEpisodes: adaptedEpisodes };
  },
);

export { fetchCharacter };
export type { IDataFromFetchCharacter };
