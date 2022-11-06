import { useEffect } from "react";
import { BookList, TitlePage } from "../../components";
import { useAppDispatch } from "../../store/hooks";
import { fetchBooks } from "../../store/slices";
import { Wrapper } from "./styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  });

  return (
    <Wrapper>
      <TitlePage>New Releases Books</TitlePage>
      <BookList />
    </Wrapper>
  );
};
