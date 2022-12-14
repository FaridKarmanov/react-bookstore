import { BookListItem } from "..";
import { useAppSelector } from "../../store/hooks";
import { getBooks } from "../../store/selectors";
import { List } from "./styles";

export const BookList = () => {
  const { books } = useAppSelector(getBooks);

  return (
    <List>
      {books.map((book) => {
        return <BookListItem key={book.isbn13} book={book} />;
      })}
    </List>
  );
};
