import React from "react";
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
    <Book key={isbn13}>
      <WrapperImage>
        <BookImage src={image} />
      </WrapperImage>
      <Title> {title}</Title>
      <Subtitle> {subtitle}</Subtitle>
      <Price> {price}</Price>
    </Book>
  );
};
