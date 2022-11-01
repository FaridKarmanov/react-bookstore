import { Outlet } from "react-router-dom";
import { SearchBar } from "..";
import { Footer, Wrapper, Year, Text } from "./styles";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <SearchBar />
      <Outlet />
      <Footer>
        <Year>©2022 Bookstore</Year>
        <Text>All rights reserved</Text>
      </Footer>
    </Wrapper>
  );
};
