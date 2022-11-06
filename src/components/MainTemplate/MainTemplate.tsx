import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SearchBar } from "..";
import { Wrapper } from "./styles";

export const MainTemplate = () => {
  const [state, toggle] = useState<boolean>(false);

  return (
    <Wrapper>
      <SearchBar state={state} toggle={toggle} />
      <Outlet />
    </Wrapper>
  );
};
