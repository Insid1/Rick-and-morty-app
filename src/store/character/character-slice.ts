import { createSlice } from '@reduxjs/toolkit';
import type { ICharacter } from '../../types/data-types/data-types';

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
});

export default characterSlice.reducer;
