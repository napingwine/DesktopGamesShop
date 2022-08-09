import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IGood } from '../models/IGood';
import { IQueryParams } from '../models/IQueryParams';
import { baseURL } from './_ServiceVariables';

export const goodsAPI = createApi({
  reducerPath: 'goodsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (build) => ({
    fetchGoods: build.query<{ apiResponse: IGood[], totalCount: number }, IQueryParams>({
      query: ( queryParams ) => ({
        url: 'goods',
        params: { ...queryParams }
      }),
      transformResponse(apiResponse: IGood[], meta) {
        return { apiResponse, totalCount: Number(meta?.response?.headers.get('X-Total-Count')) }
      }
    }),
  })
});