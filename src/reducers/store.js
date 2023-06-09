// store.ts
import { configureStore } from '@reduxjs/toolkit';
import batteryReducer from './reducer';

const store = configureStore({
  reducer: {
    battery: batteryReducer,
  },
});

export default store;