import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '@/store/episodes/episodes-slice';
import episodeReducer from '@/store/episode/episode-slice';
import characterReducer from '@/store/character/character-slice';
import locationReducer from '@/store/location/location-slice';

enum ReducerName {
  Episode = 'EPISODE',
  Episodes = 'EPISODES',
  Character = 'CHARACTER',
  location = 'LOCATION',
}

const store = configureStore({
  reducer: {
    [ReducerName.Episodes]: dataReducer,
    [ReducerName.Episode]: episodeReducer,
    [ReducerName.Character]: characterReducer,
    [ReducerName.location]: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
