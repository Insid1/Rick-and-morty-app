import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ICharacter, IEpisode } from '../../types/data-types/data-types';
import { fetchCharacter, IDataFromFetchCharacter } from './thunks';

interface IInitialState {
  character: ICharacter | null,
  characterEpisodes: IEpisode[],
  isDataLoaded: boolean,
  error: string | null,

}

const initialState: IInitialState = {
  character: null,
  characterEpisodes: [],
  isDataLoaded: false,
  error: null,

};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCharacter.fulfilled,
      (state, action: PayloadAction<IDataFromFetchCharacter>) => {
        state.character = action.payload.character;
        state.characterEpisodes = action.payload.characterEpisodes;
      },
    )
      .addCase(
        fetchCharacter.pending,
        (state) => {
          state.character = initialState.character;
          state.characterEpisodes = initialState.characterEpisodes;
          state.isDataLoaded = initialState.isDataLoaded;
          state.error = initialState.error;
        },
      )
      .addCase(
        fetchCharacter.rejected,
        (state, action) => {
          state.error = action.payload as string;
        },
      );
  },
});

export default characterSlice.reducer;
