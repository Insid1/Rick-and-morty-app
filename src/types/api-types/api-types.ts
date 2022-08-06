interface IServerEpisode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string,
}

interface IServerCharacter {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string
}

interface IServerResponseInfo {
  count: number,
  next: string | null,
  pages: number,
  prev: string | null,
}

export type { IServerEpisode, IServerResponseInfo, IServerCharacter };
