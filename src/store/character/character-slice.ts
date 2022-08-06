import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ICharacter, IEpisode } from '../../types/data-types/data-types';
import { fetchCharacter, IDataFromFetchCharacter } from './thunks';

interface IInitialState {
  character: ICharacter | null,
  characterEpisodes: IEpisode[],
  isDataLoaded: boolean,

}

const initialState: IInitialState = {
  character: null,
  characterEpisodes: [],
  isDataLoaded: false,

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
    );
  },
});

export default characterSlice.reducer;
