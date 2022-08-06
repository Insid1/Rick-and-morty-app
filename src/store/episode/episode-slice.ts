import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ICharacter, IEpisode } from '../../types/data-types/data-types';
import {
  fetchEpisode, IDataFromFetchEpisode,

} from './thunks';

interface IInitialState {
  episode: IEpisode | null,
  charactersInEpisode: ICharacter[]
  isDataLoaded: boolean,

}

const initialState: IInitialState = {
  episode: null,
  charactersInEpisode: [],
  isDataLoaded: false,

};

const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchEpisode.fulfilled,
        (state, action: PayloadAction<IDataFromFetchEpisode>) => {
          state.episode = action.payload.episode;
          state.charactersInEpisode = action.payload.charactersInEpisode;
        },
      );
  },

});

export default episodeSlice.reducer;
