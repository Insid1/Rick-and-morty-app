import { IServerCharacter, IServerEpisode, IServerLocation } from '../api-types/api-types';

interface IEpisode extends Omit<IServerEpisode, 'air_date' | 'characters'> {
  airDate: string,
  characters: number[],
}

interface ICharacter extends Omit<IServerCharacter, 'episode'> {
  episode: number[]
}

interface ILocation extends Omit<IServerLocation, 'residents'> {
  charactersOnLocation: number[],
}

export { IEpisode, ICharacter, ILocation };
