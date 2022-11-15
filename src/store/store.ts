import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/booksSlice";
import bookReducer from "./slices/bookSlice";
import cartReducer from "./slices/cartSlice";
import favoritesReducer from "./slices/favoritesSlice";
import userReducer from "./slices/userSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    user: userReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
