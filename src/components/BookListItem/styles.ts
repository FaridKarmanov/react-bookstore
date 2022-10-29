import styled from "styled-components";
import { Color } from "../../ui";

export const Book = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.Blue};
`;

export const BookImage = styled.img`
  object-fit: cover;
`;

export const Title = styled.h2`
  color: ${Color.Primary};
  font-family: Bebas Neue;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Subtitle = styled.h3`
  color: ${Color.Secondary};
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Price = styled.p`
  color: ${Color.Primary};
  font-family: Bebas Neue;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;
