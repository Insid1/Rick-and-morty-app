import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './episodes/episodes-slice';
import interfaceReducer from './interface/interface-slice';
import episodeReducer from './episode/episode-slice';
import characterReducer from './character/character-slice';
import locationReducer from './location/location-slice';

enum ReducerName {
  Episode = 'EPISODE',
  Episodes = 'EPISODES',
  Character = 'CHARACTER',
  location = 'LOCATION',
  Interface = 'INTERFACE',
}

const store = configureStore({
  reducer: {
    [ReducerName.Episodes]: dataReducer,
    [ReducerName.Interface]: interfaceReducer,
    [ReducerName.Episode]: episodeReducer,
    [ReducerName.Character]: characterReducer,
    [ReducerName.location]: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
