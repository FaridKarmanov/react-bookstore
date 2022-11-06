import styled from "styled-components";
import { Color } from "../../ui";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 49px;
    width: 100%;
    border-bottom: 1px solid ${Color.Secondary};
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 272px;
  width: 100%;
  margin-bottom: 20px;
  background-color: ${Color.Blue};

  @media screen and (min-width: 768px) {
    max-width: 256px;
    margin-bottom: 0;
  }
`;

export const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  background: ${Color.Primary};
`;

export const BookImage = styled.img`
  width: 150px;
  height: 175px;
  margin: 0 auto;
  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 272px;
  width: 100%;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  font-family: Bebas Neue;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Primary};
`;

export const Subtitle = styled.h3`
  margin-bottom: 24px;
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Secondary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 168px;
  width: 100%;
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
