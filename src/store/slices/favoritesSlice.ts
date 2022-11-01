import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetails } from "../../types";

interface BooksState {
  favorites: IBookDetails[];
}

const initialState: BooksState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, { payload }: PayloadAction<IBookDetails>) => {
      const result = state.favorites.find(
        (book) => book.isbn13 === payload.isbn13
      );

      if (!result) {
        state.favorites.push(payload);
      }
    },
    removeFromFavorite: (state, { payload }: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (book) => book.isbn13 !== payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
