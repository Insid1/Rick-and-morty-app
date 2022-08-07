import { RootState } from '../store';

const selectCharacter = (state: RootState) => (state.CHARACTER.character);

const selectCharacterEpisodes = (state: RootState) => (state.CHARACTER.characterEpisodes);

export { selectCharacter, selectCharacterEpisodes };
