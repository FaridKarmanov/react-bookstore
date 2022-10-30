import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookstoreAPI } from "../../services/BookStoreApi";
import { IBookDetails } from "../../types";

interface BooksState {
  book: IBookDetails | null;
  isLoading: boolean;
  error: null | string;
}

const initialState: BooksState = {
  book: null,
  isLoading: false,
  error: null,
};

export const fetchBook = createAsyncThunk(
  "book/fetchBook",
  async (isbn13: string) => {
    const response = await bookstoreAPI.getBook(isbn13);
    return response;
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBook.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.book = payload;
    });
    builder.addCase(fetchBook.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = "Error";
      }
    });
  },
});

export default bookSlice.reducer;
