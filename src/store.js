import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import postApi from "./features/post";


const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(postApi.middleware)
    )
})

setupListeners(store.dispatch);

export default store