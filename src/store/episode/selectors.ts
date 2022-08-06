import { RootState } from '../store';

const selectEpisode = (state: RootState) => (state.EPISODE.episode);

// eslint-disable-next-line import/prefer-default-export
export { selectEpisode };
