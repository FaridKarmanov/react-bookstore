import { SearchList, TitlePage } from "../../components";
import { useAppSelector } from "../../store/hooks";
import { getSearchBook } from "../../store/selectors";
import { Wrapper } from "./styles";

export const SearchPage = () => {
  const { searchValue } = useAppSelector(getSearchBook);

  return (
    <Wrapper>
      <TitlePage> `{searchValue.toUpperCase()}` Search Results </TitlePage>
      <SearchList />
    </Wrapper>
  );
};
