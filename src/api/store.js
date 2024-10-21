import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productApi";

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
