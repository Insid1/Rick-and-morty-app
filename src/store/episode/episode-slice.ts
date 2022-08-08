import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ICharacter, IEpisode } from '@/types/data-types/data-types';
import {
  fetchEpisode, IDataFromFetchEpisode,

} from './thunks';

interface IInitialState {
  episode: IEpisode | null,
  charactersInEpisode: ICharacter[]
  isDataLoaded: boolean,
  error: string | null,
}

const initialState: IInitialState = {
  episode: null,
  charactersInEpisode: [],
  isDataLoaded: false,
  error: null,

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
          state.isDataLoaded = true;
        },
      ).addCase(
        fetchEpisode.pending,
        (state) => {
          state.episode = initialState.episode;
          state.charactersInEpisode = initialState.charactersInEpisode;
          state.isDataLoaded = initialState.isDataLoaded;
          state.error = initialState.error;
        },
      )
      .addCase(
        fetchEpisode.rejected,
        (state, action) => {
          state.error = action.payload as string;
        },
      );
  },

});

export default episodeSlice.reducer;
