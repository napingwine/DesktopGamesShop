import { bannerDataAPI } from './../services/BannerService';
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./reducer/UserSlice";

import { goodsAPI } from "../services/SpecialPropositionService";
import { eventsAPI } from '../services/EventsService';

const rootReducer = combineReducers({
  userReducer,
  [goodsAPI.reducerPath]: goodsAPI.reducer,
  [bannerDataAPI.reducerPath]: bannerDataAPI.reducer,
  [eventsAPI.reducerPath]: eventsAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware()
    .concat(goodsAPI.middleware)
    .concat(bannerDataAPI.middleware)
    .concat(eventsAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']