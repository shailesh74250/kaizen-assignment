// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice'; // Import your user slice

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
