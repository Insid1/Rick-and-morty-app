import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ICharacter } from '../../types/data-types/data-types';
import { fetchCharacter } from './thunks';

interface IInitialState {
  character: ICharacter | null,
  isDataLoaded: boolean,

}

const initialState: IInitialState = {
  character: null,
  isDataLoaded: false,

};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacter.fulfilled, (state, action: PayloadAction<ICharacter>) => {
      state.character = action.payload;
    });
  },
});

export default characterSlice.reducer;
