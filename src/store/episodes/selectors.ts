import { RootState } from '../store';

const selectEpisodes = (state: RootState) => (state.EPISODES.episodes);

// eslint-disable-next-line import/prefer-default-export
export { selectEpisodes };
