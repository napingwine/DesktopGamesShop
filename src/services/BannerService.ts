import { IBannerSlide } from './../models/IBannerSlide';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseURL } from './_ServiceVariables'

export const bannerDataAPI = createApi({
  reducerPath: 'bannerDataAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (build) => ({
    fetchBannerData: build.query<IBannerSlide[], unknown>({
      query: () => ({
        url: 'bannerMainPage',
      }),
    }),
  })
});
