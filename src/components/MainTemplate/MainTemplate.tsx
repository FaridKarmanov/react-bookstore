import { Outlet } from "react-router-dom";
import { SearchBar } from "..";
import { Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <SearchBar />
      <Outlet />
    </Wrapper>
  );
};
