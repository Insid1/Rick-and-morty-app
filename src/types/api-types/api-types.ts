interface IServerEpisode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string,
}

interface IServerResponseInfo {
  count: number,
  next: string | null,
  pages: number,
  prev: string | null,
}

// eslint-disable-next-line import/prefer-default-export
export type { IServerEpisode, IServerResponseInfo };
