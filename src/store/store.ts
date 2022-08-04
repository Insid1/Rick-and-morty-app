import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './data/data-slice';
import interfaceReducer from './interface/interface-slice';

enum ReducerName {
  Data = 'DATA',
  Interface = 'INTERFACE',
}

const store = configureStore({
  reducer: {
    [ReducerName.Data]: dataReducer,
    [ReducerName.Interface]: interfaceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
