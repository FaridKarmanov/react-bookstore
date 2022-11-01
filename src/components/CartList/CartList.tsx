import { CartItem } from "..";
import { useAppSelector } from "../../store/hooks";
import { getCart } from "../../store/selectors";
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
