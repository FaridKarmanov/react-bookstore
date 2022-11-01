import { fetchBooks } from "./booksSlice";
import { fetchBook } from "./bookSlice";

import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "./cartSlice";

import { addToFavorites, removeFromFavorite } from "./favoritesSlice";

export {
  fetchBooks,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  fetchBook,
  addToFavorites,
  removeFromFavorite,
};
