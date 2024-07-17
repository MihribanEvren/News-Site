import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    category: 'general',
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setArticles, setCategory } = newsSlice.actions;

export default newsSlice.reducer;
