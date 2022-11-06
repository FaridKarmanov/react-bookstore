import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookCart, IBookDetails } from "../../types";

interface CartState {
  cart: IBookCart[];
  total: number;
  isLoading: boolean;
  error: null | string;
}

const initialState: CartState = {
  cart: [],
  total: 0,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<IBookDetails>) => {
      const result = state.cart.find(
        (movie) => movie.isbn13 === payload.isbn13
      );

      if (!result) {
        const cartBook = {
          ...payload,
          quantity: 1,
        };
        state.cart.push(cartBook);
        state.total += +cartBook.price.slice(1, 6);
      }
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      state.cart.forEach((book) => {
        if (book.isbn13 === payload) {
          state.total -= book.quantity * +book.price.slice(1, 6);
        }
      });
      state.cart = state.cart.filter((book) => book.isbn13 !== payload);
    },

    increaseQuantity: (state, { payload }: PayloadAction<string>) => {
      state.cart.forEach((book) => {
        if (book.isbn13 === payload) {
          book.quantity += 1;
          state.total += +book.price.slice(1, 6);
        }
      });
    },

    decreaseQuantity: (state, { payload }: PayloadAction<string>) => {
      state.cart.forEach((book) => {
        if (book.isbn13 === payload && book.quantity === 1) {
          state.cart = state.cart.filter((book) => book.isbn13 !== payload);
          state.total -= +book.price.slice(1, 6);
        } else if (book.isbn13 === payload) {
          book.quantity -= 1;
          state.total -= +book.price.slice(1, 6);
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
