import { RootState } from '../store';

const selectLocation = (state: RootState) => (state.LOCATION.location);

const selectLocationCharacters = (state: RootState) => (state.LOCATION.locationCharacters);

const selectLoadLocationError = (state: RootState) => (state.LOCATION.error);

export { selectLocation, selectLocationCharacters, selectLoadLocationError };
