import { RootState } from '@/store/store';

const selectEpisodes = (state: RootState) => (state.EPISODES.episodes);

const selectLoadEpisodesError = (state: RootState) => (state.EPISODES.error);

export { selectEpisodes, selectLoadEpisodesError };
