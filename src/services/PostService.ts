import { IPost } from './../models/IPost';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit = 5) => ({
        url: 'posts',
        params: {
          _limit: limit
        }
      })
    })
  })
})