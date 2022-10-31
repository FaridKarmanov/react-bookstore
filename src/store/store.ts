import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/booksSlice";
import bookReducer from "./slices/bookSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
