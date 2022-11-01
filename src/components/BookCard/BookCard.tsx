import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowHomeIcon, HeartEmptyIcon } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBook } from "../../store/selectors";
import { addToCart, addToFavorites, fetchBook } from "../../store/slices";
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
  Title,
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
  const dispatch = useAppDispatch();
  const [state, setState] = useState<boolean>(true);

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
        <Title>{title}</Title>
      </TitleContainer>
      <ImageContainer>
        <WrapperImage>
          <BookImage src={image} />
          <FavoritesContainer>
            <HeartEmptyIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (book) {
                  dispatch(addToFavorites(book));
                }
              }}
            />
          </FavoritesContainer>
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
          <ButtonAddToCart
            onClick={() => {
              if (book) dispatch(addToCart(book));
            }}
          >
            add to cart
          </ButtonAddToCart>
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
