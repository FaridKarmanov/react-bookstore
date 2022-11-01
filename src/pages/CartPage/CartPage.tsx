import React from "react";
import { Link } from "react-router-dom";
import { ArrowHomeIcon } from "../../assets";
import { CartList } from "../../components";
import { useAppSelector } from "../../store/hooks";
import { getCart } from "../../store/selectors";
import {
  Button,
  FirstName,
  Paragraph,
  SecondName,
  Title,
  TitleContainer,
  Total,
  TotalContainer,
  Wrapper,
} from "./styles";

export const CartPage = () => {
  const { total } = useAppSelector(getCart);
  const vat = total * 0.18;
  const bill = total + vat;
  return (
    <Wrapper>
      <TitleContainer>
        <Link to="/">
          <ArrowHomeIcon />
        </Link>
        <Title>Your cart</Title>
      </TitleContainer>
      <CartList />
      <TotalContainer>
        <Paragraph>
          <FirstName>Sum total</FirstName>
          <SecondName>${Math.abs(+total.toFixed(2))}</SecondName>
        </Paragraph>
        <Paragraph>
          <FirstName>VAT</FirstName>
          <SecondName>${Math.abs(+vat.toFixed(2))}</SecondName>
        </Paragraph>
        <Paragraph>
          <Total>Total:</Total>
          <Total>${Math.abs(+bill.toFixed(2))} </Total>
        </Paragraph>
        <Button>check out</Button>
      </TotalContainer>
    </Wrapper>
  );
};
