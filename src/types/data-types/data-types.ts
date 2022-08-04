interface IEpisode {
  id: number,
  name: string,
  airDate: string,
  episode: string,
  characters: string[],
  url: string,
  created: string,
}

// eslint-disable-next-line import/prefer-default-export
export { IEpisode };
