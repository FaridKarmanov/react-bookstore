import React from "react";
import { useAppSelector } from "../../store/hooks";
import { getCart } from "../../store/selectors";
import { CartItem } from "../CartItem/CartItem";
import { List } from "./styles";

export const CartList = () => {
  const { cart } = useAppSelector(getCart);

  return (
    <List>
      {cart.map((cartBook) => {
        return <CartItem key={cartBook.isbn13} book={cartBook} />;
      })}
    </List>
  );
};
