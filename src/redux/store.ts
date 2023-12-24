import { configureStore } from '@reduxjs/toolkit';

import itemReducer from '@/redux/itemSlice';
import rootReducer from '@/redux/rootSlice';

export const store = configureStore({
  reducer: {
    root: rootReducer,
    item: itemReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
