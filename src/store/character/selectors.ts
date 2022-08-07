import { RootState } from '../store';

const selectCharacter = (state: RootState) => (state.CHARACTER.character);

const selectCharacterEpisodes = (state: RootState) => (state.CHARACTER.characterEpisodes);

const selectLoadCharacterError = (state: RootState) => (state.CHARACTER.error);

export { selectCharacter, selectCharacterEpisodes, selectLoadCharacterError };
