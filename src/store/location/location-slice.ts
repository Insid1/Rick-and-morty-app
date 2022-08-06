import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ICharacter } from '../../types/data-types/data-types';
// import { fetchCharacter } from './thunks';

interface IInitialState {
  location: ICharacter | null,
  isDataLoaded: boolean,

}

const initialState: IInitialState = {
  location: null,
  isDataLoaded: false,

};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: { },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchCharacter.fulfilled, (state, action: PayloadAction<ICharacter>) => {
  //     state.location = action.payload;
  //   });
  // },
});

export default locationSlice.reducer;
