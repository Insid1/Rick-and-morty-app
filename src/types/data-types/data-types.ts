import {
  IServerCharacter, IServerCharacterLocation, IServerEpisode, IServerLocation,
} from '../api-types/api-types';

interface IEpisode extends Omit<IServerEpisode, 'air_date' | 'characters'> {
  airDate: string,
  characters: number[],
}

interface ICharacter extends Omit<IServerCharacter, 'episode' | 'location'> {
  episode: number[],
  location: IServerCharacterLocation & { id: number | null },
}

interface ILocation extends Omit<IServerLocation, 'residents'> {
  charactersOnLocation: number[],
}

export { IEpisode, ICharacter, ILocation };
