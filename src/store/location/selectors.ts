import { RootState } from '../store';

const selectLocation = (state: RootState) => (state.LOCATION.location);

export { selectLocation };
