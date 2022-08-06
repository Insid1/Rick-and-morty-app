const parseUrlForLastPath = (url: URL): string | null => url.pathname.split('/').pop() || null;

const getIdsFromApiStrings = (apiStrings: string[]): number[] => {
  const apiIds = apiStrings.reduce<number[]>((prevValue, currValue) => {
    const url = new URL(currValue);
    const id = parseUrlForLastPath(url);
    if (id) {
      prevValue.push(+id);
    }
    return prevValue;
  }, []);
  return apiIds;
};

export { parseUrlForLastPath, getIdsFromApiStrings };
