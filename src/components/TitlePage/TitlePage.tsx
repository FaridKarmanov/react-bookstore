import React, { ReactNode } from "react";
import { Title } from "./styles";

interface IProps {
  children: ReactNode;
}

export const TitlePage = ({ children }: IProps) => {
  return <Title>{children}</Title>;
};
