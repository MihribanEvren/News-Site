import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from './services/news';
import { setupListeners } from '@reduxjs/toolkit/query';
import newsReducer from './features/newsSlice';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

setupListeners(store.dispatch);
