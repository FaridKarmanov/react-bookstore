import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookstoreAPI } from "../../services/BookStoreApi";
import { IBook } from "../../types";

interface BooksState {
  books: IBook[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BooksState = {
  books: [],
  isLoading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await bookstoreAPI.getNew();
  return response.books;
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = payload;
    });
    builder.addCase(fetchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = "Error";
      }
    });
  },
});

export default booksSlice.reducer;
