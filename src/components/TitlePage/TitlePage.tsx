import React from "react";
import { Title } from "./styles";

interface IProps {
  children: string;
}

export const TitlePage = ({ children }: IProps) => {
  return <Title>{children}</Title>;
};
