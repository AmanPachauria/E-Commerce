import { configureStore } from "@reduxjs/toolkit";
import productReducer from './product/productSlice';

export const store = configureStore({
    reducer: {user: productReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})