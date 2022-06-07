import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

interface IGood {
  id: number,
  title: string,
  price: number,
  audience: string,
  estimatedGameTime: string,
  age: string,
  photoURL: string,
}

export const goodsAPI = createApi({
  reducerPath: 'goodsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (build) => ({
    fetchAllGoods: build.query<IGood[], { limit: number; page: number }>({
      query: ({limit,page}) => ({
        url: 'goods',
        params: {
          _limit: limit,
          _page: page
        }
      })
    })
  })
})
