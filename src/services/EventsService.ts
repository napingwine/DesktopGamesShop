import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import IEventItem from '../models/IEventItem';
import { IQueryParams } from '../models/IQueryParams';
import { baseURL } from './_ServiceVariables'

export const eventsAPI = createApi({
  reducerPath: 'eventsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (build) => ({
    fetchEvents: build.query<{ apiResponse: IEventItem[], totalCount: number }, IQueryParams>({
      query: ( queryParams ) => ({
        url: 'events',
        params: { ...queryParams }
      }),
      transformResponse(apiResponse: IEventItem[], meta) {
        return { apiResponse, totalCount: Number(meta?.response?.headers.get('X-Total-Count')) }
      }
    }),
  })
})
