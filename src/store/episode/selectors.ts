import { RootState } from '../store';

const selectEpisode = (state: RootState) => (state.EPISODE.episode);

const selectCharactersInEpisode = (state: RootState) => (state.EPISODE.charactersInEpisode);

// eslint-disable-next-line import/prefer-default-export
export { selectEpisode, selectCharactersInEpisode };
