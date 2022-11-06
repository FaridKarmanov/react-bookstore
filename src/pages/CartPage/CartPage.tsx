import React from "react";
import { Link } from "react-router-dom";
import { ArrowHomeIcon } from "../../assets";
import { CartList, TitlePage } from "../../components";
import { useAppSelector } from "../../store/hooks";
import { getCart } from "../../store/selectors";
import {
  Button,
  EmptyCart,
  FirstName,
  Paragraph,
  SecondName,
  TitleContainer,
  Total,
  TotalContainer,
  Wrapper,
} from "./styles";

export const CartPage = () => {
  const { total, cart } = useAppSelector(getCart);
  const vat = total * 0.18;
  const bill = total + vat;

  return (
    <Wrapper>
      <TitleContainer>
        <Link to="/">
          <ArrowHomeIcon />
        </Link>
        <TitlePage>Your cart</TitlePage>
      </TitleContainer>
      {cart.length === 0 ? (
        <EmptyCart>Your cart is empty!</EmptyCart>
      ) : (
        <>
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
        </>
      )}
    </Wrapper>
  );
};
