import { RootState } from '@/store/store';

const selectEpisode = (state: RootState) => (state.EPISODE.episode);

const selectCharactersInEpisode = (state: RootState) => (state.EPISODE.charactersInEpisode);

const selectLoadEpisodeError = (state: RootState) => (state.EPISODE.error);

export { selectEpisode, selectCharactersInEpisode, selectLoadEpisodeError };
