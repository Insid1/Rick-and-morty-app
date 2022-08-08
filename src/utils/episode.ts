const createQueryForEpisode = (searchString: string): string => {
  const mapToQueryParam = {
    name: '?name=',
    episode: '?episode=',
  };

  if (searchString.startsWith('S')) {
    return mapToQueryParam.episode + searchString;
  }

  return mapToQueryParam.name + searchString.toLocaleLowerCase();
};

export { createQueryForEpisode };
