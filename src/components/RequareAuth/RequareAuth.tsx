import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/selectors";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUser);
  return isAuth ? <Outlet /> : <Navigate to={"/sign-in"} />;
};
