import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { postAPI } from "../services/PostService";
import { goodsAPI } from "../services/SpecialPropositionService";
import userReducer from "./reducer/UserSlice";

const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [goodsAPI.reducerPath]: goodsAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware()
    .concat(postAPI.middleware)
    .concat(goodsAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']