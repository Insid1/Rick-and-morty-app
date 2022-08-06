const parseUrlForLastPath = (url: URL): string | null => url.pathname.split('/').pop() || null;

const getIdFromApiString = (apiString: string): number | null => {
  const url = new URL(apiString);
  const id = parseUrlForLastPath(url);
  return id ? +id : null;
};

const getIdsFromApiStrings = (apiStrings: string[]): number[] => {
  const apiIds = apiStrings.reduce<number[]>((prevValue, currValue) => {
    const id = getIdFromApiString(currValue);
    if (id) {
      prevValue.push(+id);
    }
    return prevValue;
  }, []);
  return apiIds;
};

export { parseUrlForLastPath, getIdFromApiString, getIdsFromApiStrings };
