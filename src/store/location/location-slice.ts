import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ILocation } from '../../types/data-types/data-types';
import { fetchLocation } from './thunks';

interface IInitialState {
  location: ILocation | null,
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
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.fulfilled, (state, action: PayloadAction<ILocation>) => {
      state.location = action.payload;
    });
  },
});

export default locationSlice.reducer;
