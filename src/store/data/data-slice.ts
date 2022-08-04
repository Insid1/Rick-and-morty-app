import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IEpisode } from '../../types/data-types/data-types';
import {
  fetchEpisodes, fetchMoreEpisodes, IDataFromFetchEpisodes, IDataFromFetchMoreEpisodes,
} from './thunks';

interface IInitialState {
  episodes: IEpisode[],
  nextPageEpisode: string | null,
  prevPageEpisode: string | null,
  isDataLoaded: boolean,

}

const initialState: IInitialState = {
  episodes: [],
  nextPageEpisode: null,
  prevPageEpisode: null,
  isDataLoaded: false,

};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchEpisodes.fulfilled,
        (state, action: PayloadAction<IDataFromFetchEpisodes>) => {
          state.episodes = action.payload.episodes;
          state.nextPageEpisode = action.payload.nextPageLink;
        },
      )
      .addCase(
        fetchMoreEpisodes.fulfilled,
        (state, action: PayloadAction<IDataFromFetchMoreEpisodes | null>) => {
          // may be removed from here to promise rejection
          if (action.payload === null) return;
          state.nextPageEpisode = action.payload.nextPageLink;
          state.prevPageEpisode = action.payload.prevPageLink;
          state.episodes = state.episodes.concat(action.payload.episodes);
        },
      );
  },

});

export default dataSlice.reducer;
