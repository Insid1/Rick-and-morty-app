import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ICharacter, ILocation } from '@/types/data-types/data-types';
import { fetchLocation, IDataFromFetchLocation } from './thunks';

interface IInitialState {
  location: ILocation | null,
  locationCharacters: ICharacter[],
  isDataLoaded: boolean,
  error: string | null,

}

const initialState: IInitialState = {
  location: null,
  locationCharacters: [],
  isDataLoaded: false,
  error: null,

};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchLocation.fulfilled,
        (state, action: PayloadAction<IDataFromFetchLocation>) => {
          state.location = action.payload.location;
          state.locationCharacters = action.payload.locationCharacters;
          state.isDataLoaded = true;
        },
      ).addCase(
        fetchLocation.pending,
        (state) => {
          state.location = initialState.location;
          state.locationCharacters = initialState.locationCharacters;
          state.isDataLoaded = initialState.isDataLoaded;
          state.error = initialState.error;
        },
      )
      .addCase(
        fetchLocation.rejected,
        (state, action) => {
          state.error = action.payload as string;
        },
      );
  },
});

export default locationSlice.reducer;
