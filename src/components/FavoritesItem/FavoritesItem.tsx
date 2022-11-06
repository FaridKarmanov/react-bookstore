import { HeartFillIcon, MobileFavoritesIcon } from "../../assets";
import { useWindowSize } from "../../hooks";
import { useAppDispatch } from "../../store/hooks";
import { removeFromFavorite } from "../../store/slices";
import { IBookDetails } from "../../types";
import {
  BookImage,
  Description,
  FavoritesContainer,
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
  const { width = 0 } = useWindowSize();

  return (
    <Item>
      <WrapperImage>
        {width >= 768 ? (
          <></>
        ) : (
          <FavoritesContainer>
            <MobileFavoritesIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (book) {
                  dispatch(removeFromFavorite(isbn13));
                }
              }}
            />
          </FavoritesContainer>
        )}
        <BookImage src={image} />
      </WrapperImage>

      <Description>
        <Title>{title}</Title>
        <Subtitle>
          {authors}, {publisher}
        </Subtitle>
        <Price>{"$0.00" === price ? "For free" : `${price}`}</Price>
      </Description>
      {width >= 768 ? (
        <HeartFillIcon
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(removeFromFavorite(isbn13))}
        />
      ) : (
        <></>
      )}
    </Item>
  );
};
