import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ICharacter, ILocation } from '../../types/data-types/data-types';
import { fetchLocation, IDataFromFetchLocation } from './thunks';

interface IInitialState {
  location: ILocation | null,
  locationCharacters: ICharacter[],
  isDataLoaded: boolean,

}

const initialState: IInitialState = {
  location: null,
  locationCharacters: [],
  isDataLoaded: false,

};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(
      fetchLocation.fulfilled,
      (state, action: PayloadAction<IDataFromFetchLocation>) => {
        state.location = action.payload.location;
        state.locationCharacters = action.payload.locationCharacters;
      },
    );
  },
});

export default locationSlice.reducer;
