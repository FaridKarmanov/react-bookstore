import React from "react";
import { Link } from "react-router-dom";
import { Container, Search, Title, Wrapper } from "./styles";

interface IProps {
  toggle: (value: boolean) => void;
}

export const BurgerMenu = ({ toggle }: IProps) => {
  return (
    <Wrapper>
      <Container>
        <Search placeholder="Search" />
        <Link to="favorites" onClick={() => toggle(false)}>
          <Title>Favorites</Title>
        </Link>
        <Link to="cart" onClick={() => toggle(false)}>
          <Title>Cart</Title>
        </Link>
      </Container>
    </Wrapper>
  );
};
