import { useEffect } from "react";
import { BookList } from "../../components";
import { useAppDispatch } from "../../store/hooks";
import { fetchBooks } from "../../store/slices";
import { Title, Wrapper } from "./styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  });

  return (
    <Wrapper>
      <Title>New Releases Books</Title>
      <BookList />
    </Wrapper>
  );
};
