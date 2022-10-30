import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowHomeIcon } from "../../assets";
import { useToggle } from "../../hooks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBook } from "../../store/selectors";
import { fetchBook } from "../../store/slices/bookSlice";
import { IBookDetails } from "../../types";
import {
  BookImage,
  Button,
  Description,
  FooterContainer,
  ImageContainer,
  InformationContainer,
  Price,
  Title,
  TitleContainer,
  Wrapper,
  WrapperImage,
} from "./styles";

export const BookCard = () => {
  const { isbn13 = "" } = useParams();
  const dispatch = useAppDispatch();
  const [toggle, state] = useToggle();

  useEffect(() => {
    dispatch(fetchBook(isbn13));
  }, [dispatch, isbn13]);

  const { book } = useAppSelector(getBook);

  const { title, authors, publisher, pages, year, desc, price, image } =
    book || ({} as IBookDetails);

  return (
    <Wrapper>
      <TitleContainer>
        <Link to="/">
          <ArrowHomeIcon />
        </Link>
        <Title>{title}</Title>
      </TitleContainer>
      <ImageContainer>
        <WrapperImage>
          <BookImage src={image} />
        </WrapperImage>
        <InformationContainer>
          <Price>{price}</Price>
          <Description>Author {authors}</Description>
          <Description>Publisher {publisher}</Description>
          <Description>Year {year}</Description>
          <Description>Pages {pages}</Description>
        </InformationContainer>
      </ImageContainer>
      <FooterContainer>
        <Button onClick={() => state()}>Description</Button>
        <Button onClick={() => state()}>Author</Button>

        {toggle ? <div>{authors}</div> : <div>{desc}</div>}
      </FooterContainer>
    </Wrapper>
  );
};
