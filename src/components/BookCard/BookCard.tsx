import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TitlePage } from "..";
import {
  ArrowHomeIcon,
  HeartEmptyIcon,
  MobileFavoritesIcon,
} from "../../assets";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBook, getCart, getFavorites, getUser } from "../../store/selectors";
import {
  addToCart,
  addToFavorites,
  fetchBook,
  removeFromFavorite,
} from "../../store/slices";
import { IBookDetails } from "../../types";
import {
  BookImage,
  ButtonDescription,
  ButtonAuthor,
  Paragraph,
  ResumeContainer,
  ImageContainer,
  InformationContainer,
  Price,
  TitleContainer,
  Wrapper,
  WrapperImage,
  FirstName,
  SecondName,
  Definition,
  ButtonAddToCart,
  Preview,
  FavoritesContainer,
} from "./styles";

export const BookCard = () => {
  const { isbn13 = "" } = useParams();
  const { favorites } = useAppSelector(getFavorites);
  const { cart } = useAppSelector(getCart);
  const { isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState<boolean>(true);

  const inFavorites = () => {
    const result = favorites.find((book) => book.isbn13 === isbn13);
    if (result) {
      return true;
    }
  };

  const inCart = () => {
    const result = cart.find((book) => book.isbn13 === isbn13);
    if (result) {
      return true;
    }
  };

  useEffect(() => {
    dispatch(fetchBook(isbn13));
  }, [dispatch, isbn13]);

  const { book } = useAppSelector(getBook);

  const { title, authors, publisher, pages, year, desc, price, image, pdf } =
    book || ({} as IBookDetails);

  return (
    <Wrapper id={isbn13}>
      <TitleContainer>
        <Link to="/">
          <ArrowHomeIcon />
        </Link>
        <TitlePage>{title}</TitlePage>
      </TitleContainer>
      <ImageContainer>
        <WrapperImage>
          {isAuth ? (
            <FavoritesContainer>
              {inFavorites() ? (
                <MobileFavoritesIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (book) {
                      dispatch(removeFromFavorite(isbn13));
                    }
                  }}
                />
              ) : (
                <HeartEmptyIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (book) {
                      dispatch(addToFavorites(book));
                    }
                  }}
                />
              )}
            </FavoritesContainer>
          ) : (
            <></>
          )}

          <BookImage src={image} />
        </WrapperImage>
        <InformationContainer>
          <Price>{"$0.00" === price ? "For free" : price}</Price>
          <Paragraph>
            <FirstName>Author</FirstName> <SecondName>{authors}</SecondName>
          </Paragraph>
          <Paragraph>
            <FirstName>Publisher</FirstName>
            <SecondName>{publisher}</SecondName>
          </Paragraph>
          <Paragraph>
            <FirstName>Year</FirstName> <SecondName>{year}</SecondName>
          </Paragraph>
          <Paragraph>
            <FirstName>Pages</FirstName> <SecondName>{pages}</SecondName>
          </Paragraph>

          {isAuth ? (
            <ButtonAddToCart
              onClick={() => {
                if (book) dispatch(addToCart(book));
              }}
            >
              {inCart() ? "Book in cart" : "add to cart"}
            </ButtonAddToCart>
          ) : (
            <ButtonAddToCart
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Need sign in for add to Favorites
            </ButtonAddToCart>
          )}

          {pdf && <Preview href={Object.values(pdf)[0]}>Preview book</Preview>}
        </InformationContainer>
      </ImageContainer>
      <ResumeContainer>
        <ButtonDescription $isActive={state} onClick={() => setState(true)}>
          Description
        </ButtonDescription>
        <ButtonAuthor $isActive={state} onClick={() => setState(false)}>
          Author
        </ButtonAuthor>
      </ResumeContainer>
      {state ? (
        <Definition>{desc}</Definition>
      ) : (
        <Definition>{authors}</Definition>
      )}
    </Wrapper>
  );
};
