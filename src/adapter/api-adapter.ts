import type { IServerCharacter, IServerEpisode, IServerLocation } from '../types/api-types/api-types';
import type { ICharacter, IEpisode, ILocation } from '../types/data-types/data-types';
import { getIdFromApiString, getIdsFromApiStrings } from '../utils/common';

const adaptEpisodeToClient = (serverData: IServerEpisode): IEpisode => {
  // remove field air_date and assign its value to airDate
  const { air_date: airDate, ...rest } = serverData;
  // as we know that api always sends url with ID endpoint
  const charactersIds = getIdsFromApiStrings(serverData.characters);

  return {
    ...rest,
    airDate,
    characters: charactersIds,
  };
};

const adaptCharacterToClient = (serverData: IServerCharacter): ICharacter => {
  const { location, ...rest } = serverData;
  const locationId = getIdFromApiString(location.url);
  // as we know that api always sends url with ID endpoint
  const episodesIds = getIdsFromApiStrings(serverData.episode);

  return {
    ...rest,
    episode: episodesIds,
    location: {
      ...location,
      id: locationId,
    },
  };
};

const adaptLocationToClient = (serverData: IServerLocation): ILocation => {
  const { residents, ...rest } = serverData;
  // as we know that api always sends url with ID endpoint
  const charactersOnLocationIds = getIdsFromApiStrings(residents);

  return {
    ...rest,
    charactersOnLocation: charactersOnLocationIds,
  };
};

export { adaptEpisodeToClient, adaptCharacterToClient, adaptLocationToClient };
