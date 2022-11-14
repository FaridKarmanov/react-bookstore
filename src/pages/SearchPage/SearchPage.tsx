import { useEffect } from "react";
import { SearchList, TitlePage } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooks } from "../../store/selectors";
import { fetchSearchBooks } from "../../store/slices";
import { Wrapper } from "./styles";

export const SearchPage = () => {
  const { searchValue } = useAppSelector(getBooks);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchSearchBooks(searchValue));
  // });

  return (
    <Wrapper>
      <TitlePage> `{searchValue.toUpperCase()}` Search Results </TitlePage>
      <SearchList />
    </Wrapper>
  );
};
