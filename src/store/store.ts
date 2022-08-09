import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from './reducer/CartSlice'
import categoryReducer from './reducer/CategoriesSlice';
import { bannerDataAPI } from './../services/BannerService';
import { goodsAPI } from "../services/SpecialPropositionService";
import { eventsAPI } from '../services/EventsService';
import { searchService } from './../services/SearchService';

const rootReducer = combineReducers({
  cartReducer,
  categoryReducer,
  [goodsAPI.reducerPath]: goodsAPI.reducer,
  [bannerDataAPI.reducerPath]: bannerDataAPI.reducer,
  [eventsAPI.reducerPath]: eventsAPI.reducer,
  [searchService.reducerPath]: searchService.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(goodsAPI.middleware)
        .concat(bannerDataAPI.middleware)
        .concat(eventsAPI.middleware)
        .concat(searchService.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']