// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer'; // Import your user slice

const store = configureStore({
  reducer: {
    users: userReducer, // Add your user slice reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
