import React from "react";
import { Outlet } from "react-router-dom";

export const RequareAuth = () => {
  const isAuth = true;
  return <>{isAuth ? <Outlet /> : <></>}</>;
};
