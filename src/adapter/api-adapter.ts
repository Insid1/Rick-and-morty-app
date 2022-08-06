import type { IServerCharacter, IServerEpisode } from '../types/api-types/api-types';
import type { ICharacter, IEpisode } from '../types/data-types/data-types';
import { getIdsFromApiStrings } from '../utils/common';

const adaptEpisodeToClient = (serverData: IServerEpisode): IEpisode => {
  // as we know that api always sends url with ID endpoint

  const charactersIds = getIdsFromApiStrings(serverData.characters);
  return {
    ...serverData,
    airDate: serverData.air_date,
    characters: charactersIds,
  };
};

const adaptCharacterToClient = (serverData: IServerCharacter): ICharacter => {
  // as we know that api always sends url with ID endpoint
  const episodesIds = getIdsFromApiStrings(serverData.episode);

  return {
    ...serverData,
    episode: episodesIds,
  };
};

export { adaptEpisodeToClient, adaptCharacterToClient };
