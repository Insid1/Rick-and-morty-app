import type { IServerEpisode } from '../types/api-types/api-types';
import type { IEpisode } from '../types/data-types/data-types';

const adaptEpisodeToClient = (serverData: IServerEpisode): IEpisode => ({
  ...serverData,
  airDate: serverData.air_date,
});

// eslint-disable-next-line import/prefer-default-export
export { adaptEpisodeToClient };
