import { HeartFillIcon } from "../../assets";
import { useAppDispatch } from "../../store/hooks";
import { removeFromFavorite } from "../../store/slices";
import { IBookDetails } from "../../types";
import {
  BookImage,
  Description,
  Item,
  Price,
  Subtitle,
  Title,
  WrapperImage,
} from "./styles";

interface IProps {
  book: IBookDetails;
}

export const FavoritesItem = ({ book }: IProps) => {
  const { title, authors, publisher, isbn13, price, image } = book;
  const dispatch = useAppDispatch();

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
      </Description>
      <Price>{"$0.00" === price ? "For free" : `${price}`}</Price>
      <HeartFillIcon
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(removeFromFavorite(isbn13))}
      />
    </Item>
  );
};
