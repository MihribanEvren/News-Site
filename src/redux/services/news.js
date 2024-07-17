import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2',
    prepareHeaders: (headers) => {
      headers.set('Authorization', 'Bearer efb376ca7da345ebb042c771dc93a77a');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query({
      query: ({ country = 'us', category }) => {
        let url = `top-headlines?country=${country}`;
        if (category) {
          url += `&category=${category}`;
        }
        return url;
      },
    }),
  }),
  keepUnusedDataFor: 30,
  refetchOnMountOrArgChange: 5,
});

export const { useGetTopHeadlinesQuery } = newsApi;
