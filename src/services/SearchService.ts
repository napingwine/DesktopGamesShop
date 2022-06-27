import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IGood } from '../models/IGood';
import { IQueryParams } from '../models/IQueryParams';
import { baseURL } from './_ServiceVariables'

export const searchService = createApi({
  reducerPath: 'searchService',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (build) => ({
    fetchData: build.query<IGood[], IQueryParams>({
      query: (queryParams) => ({
        url: 'goods',
        params: { ...queryParams }
      }),
    }),
  })
})
