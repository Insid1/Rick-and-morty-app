import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IEpisode } from '../../types/data-types/data-types';
import {
  fetchEpisode,

} from './thunks';

interface IInitialState {
  episode: IEpisode | null,
  isDataLoaded: boolean,

}

const initialState: IInitialState = {
  episode: null,
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
        (state, action: PayloadAction<IEpisode>) => {
          state.episode = action.payload;
        },
      );
  },

});

export default episodeSlice.reducer;
