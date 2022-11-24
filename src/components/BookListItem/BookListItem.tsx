import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../types";
import {
  Book,
  BookImage,
  Price,
  Subtitle,
  Title,
  WrapperImage,
} from "./styles";

interface IProps {
  book: IBook;
}
export const BookListItem = ({ book }: IProps) => {
  const { isbn13, title, subtitle, image, price } = book;
  return (
    <Link to={`/book/${isbn13}`}>
      <Book>
        <WrapperImage>
          <BookImage src={image} />
        </WrapperImage>
        <Title> {title.length > 30 ? title.slice(0, 27) + "..." : title}</Title>
        <Subtitle> {subtitle}</Subtitle>
        <Price>{"$0.00" === price ? "For free" : price} </Price>
      </Book>
    </Link>
  );
};
