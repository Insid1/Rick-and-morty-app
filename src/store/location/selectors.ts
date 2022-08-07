import { RootState } from '../store';

const selectLocation = (state: RootState) => (state.LOCATION.location);

const selectLocationCharacters = (state: RootState) => (state.LOCATION.locationCharacters);

export { selectLocation, selectLocationCharacters };
