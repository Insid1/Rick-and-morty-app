import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  filterString: string | null,

}

const initialState: IInitialState = {
  filterString: null,

};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: { },

});

// export const { } = dataSlice.actions;
export default interfaceSlice.reducer;
