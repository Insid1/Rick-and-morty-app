import { RootState } from '../store';

const selectCharacter = (state: RootState) => (state.CHARACTER.character);

export { selectCharacter };
