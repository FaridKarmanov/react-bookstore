import { useEffect } from "react";
import { BookListItem } from "..";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getSearchBook } from "../../store/selectors";
import { fetchSearchBooks } from "../../store/slices";
import { List } from "./styles";

export const SearchList = () => {
  const { booksSearch, searchValue } = useAppSelector(getSearchBook);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchSearchBooks(searchValue));
    }
  }, [searchValue, dispatch]);
  return (
    <>
      {booksSearch.length === 0 ? (
        <div>Not found</div>
      ) : (
        <List>
          {booksSearch.map((book) => {
            return <BookListItem key={book.isbn13} book={book} />;
          })}
        </List>
      )}{" "}
    </>
  );
};
