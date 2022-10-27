import React from "react";
import { Outlet } from "react-router-dom";
import { SearchBar } from "./style";

export const MainTemplate = () => {
  return (
    <div>
      <SearchBar />
      <Outlet />
    </div>
  );
};
