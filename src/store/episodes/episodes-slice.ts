import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IEpisode } from '../../types/data-types/data-types';
import {
  fetchEpisodes, fetchEpisodesWithQuery,
  fetchMoreEpisodes, IDataFromFetchEpisodes, IDataFromFetchMoreEpisodes,
} from './thunks';

interface IInitialState {
  episodes: IEpisode[],
  nextPageEpisode: string | null,
  prevPageEpisode: string | null,
  isDataLoaded: boolean,
  error: string | null,

}

const initialState: IInitialState = {
  episodes: [],
  nextPageEpisode: null,
  prevPageEpisode: null,
  isDataLoaded: false,
  error: null,

};

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
    // fetch once
      .addCase(
        fetchEpisodes.fulfilled,
        (state, action: PayloadAction<IDataFromFetchEpisodes>) => {
          state.episodes = action.payload.episodes;
          state.nextPageEpisode = action.payload.nextPageLink;
        },
      )
      .addCase(
        fetchEpisodes.pending,
        (state) => {
          state.episodes = initialState.episodes;
          state.nextPageEpisode = initialState.nextPageEpisode;
          state.prevPageEpisode = initialState.prevPageEpisode;
          state.isDataLoaded = initialState.isDataLoaded;
          state.error = initialState.error;
        },
      )
      .addCase(
        fetchEpisodes.rejected,
        (state, action) => {
          state.error = action.payload as string;
        },
      )
    // fetch more
      .addCase(
        fetchMoreEpisodes.fulfilled,
        (state, action: PayloadAction<IDataFromFetchMoreEpisodes | null>) => {
          // may be removed from here to promise rejection
          if (action.payload === null) return;
          state.nextPageEpisode = action.payload.nextPageLink;
          state.prevPageEpisode = action.payload.prevPageLink;
          state.episodes = state.episodes.concat(action.payload.episodes);
        },
      )
      .addCase(
        fetchMoreEpisodes.rejected,
        (state, action) => {
          state.error = action.payload as string;
        },
      )
      // fetch with query
      .addCase(
        fetchEpisodesWithQuery.fulfilled,
        (state, action: PayloadAction<IDataFromFetchEpisodes>) => {
          state.episodes = action.payload.episodes;
          state.nextPageEpisode = action.payload.nextPageLink;
        },
      )
      .addCase(
        fetchEpisodesWithQuery.rejected,
        (state) => {
          state.episodes = [];
          state.error = 'Ooops, nothing found';
        },
      );
  },

});

export default episodesSlice.reducer;
