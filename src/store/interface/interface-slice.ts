import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  sortingType: string | null,

}

const initialState: IInitialState = {
  sortingType: null,

};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: { },

});

// export const { } = dataSlice.actions;
export default interfaceSlice.reducer;
