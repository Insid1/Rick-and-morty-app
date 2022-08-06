import { IServerCharacter, IServerEpisode } from '../api-types/api-types';

interface IEpisode extends Omit<IServerEpisode, 'air_date' | 'characters'> {
  airDate: string,
  characters: number[],
}

interface ICharacter extends Omit<IServerCharacter, 'episode'> {
  episode: number[]
}

export { IEpisode, ICharacter };
