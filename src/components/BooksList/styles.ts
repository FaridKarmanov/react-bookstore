import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 454px;
  grid-gap: 36px;
  margin-top: 48px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
