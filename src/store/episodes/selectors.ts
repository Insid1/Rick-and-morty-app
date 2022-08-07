import { RootState } from '../store';

const selectEpisodes = (state: RootState) => (state.EPISODES.episodes);

const selectLoadEpisodesError = (state: RootState) => (state.EPISODES.error);

export { selectEpisodes, selectLoadEpisodesError };
