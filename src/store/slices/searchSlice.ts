import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookstoreAPI } from "../../services/BookStoreApi";
import { IBook } from "../../types";

interface BooksState {
  searchValue: string;
  booksSearch: IBook[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BooksState = {
  searchValue: "",
  booksSearch: [],
  isLoading: false,
  error: null,
};

export const fetchSearchBooks = createAsyncThunk(
  "search/fetchSearchBooks",
  async (searchValue: string) => {
    const response = await bookstoreAPI.getSearch(searchValue);
    return response.books;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSearchBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.booksSearch = payload;
    });
    builder.addCase(fetchSearchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = "Error";
      }
    });
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
