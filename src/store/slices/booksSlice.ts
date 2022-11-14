import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookstoreAPI } from "../../services/BookStoreApi";
import { IBook } from "../../types";

interface BooksState {
  books: IBook[];
  searchBooks: IBook[];
  searchValue: string;
  isLoading: boolean;
  error: null | string;
}

const initialState: BooksState = {
  books: [],
  searchBooks: [],
  searchValue: "",
  isLoading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await bookstoreAPI.getNew();
  return response.books;
});

export const fetchSearchBooks = createAsyncThunk(
  "books/fetchSearchBooks",
  async (searchValue: string) => {
    const response = await bookstoreAPI.getSearch(searchValue);
    return response.books;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
  },
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
    builder.addCase(fetchSearchBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.searchBooks = payload;
    });
    builder.addCase(fetchSearchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = "Error";
      }
    });
  },
});

export const { setSearchValue } = booksSlice.actions;

export default booksSlice.reducer;
