import { DeleteIcon, MinusIcon, PlusIcon } from "../../assets";
import { useAppDispatch } from "../../store/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../store/slices";
import { IBookCart } from "../../types";
import {
  BookImage,
  ButtonContainer,
  Description,
  Item,
  Price,
  Subtitle,
  Title,
  WrapperImage,
} from "./styles";

interface IProps {
  book: IBookCart;
}

export const CartItem = ({ book }: IProps) => {
  const { title, authors, publisher, isbn13, price, image, quantity } = book;
  const dispatch = useAppDispatch();

  const totalPrice = quantity * +price.slice(1, 6);

  return (
    <Item>
      <WrapperImage>
        <BookImage src={image} />
      </WrapperImage>

      <Description>
        <Title>{title}</Title>
        <Subtitle>
          {authors}, {publisher}
        </Subtitle>
        <ButtonContainer>
          <MinusIcon
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(decreaseQuantity(isbn13))}
          />
          {quantity}
          <PlusIcon
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(increaseQuantity(isbn13))}
          />
        </ButtonContainer>
      </Description>
      <Price>${totalPrice.toFixed(2)}</Price>
      <DeleteIcon
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(removeFromCart(isbn13))}
      />
    </Item>
  );
};
