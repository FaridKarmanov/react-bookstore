import styled from "styled-components";
import { Color } from "../../ui";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 36px;

  @media screen and (min-width: 1048px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${Color.Orange};
  max-width: 688px;
  width: 100%;

  @media screen and (min-width: 1048px) {
    max-width: 544px;
  }
`;

export const BookImage = styled.img`
  width: 150px;
  height: 175px;
  margin: 0 auto;
  object-fit: cover;

  @media screen and (min-width: 540px) {
    width: 300px;
    height: 350px;
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
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 688px;
  width: 100%;

  @media screen and (min-width: 1048px) {
    max-width: 448px;
  }
`;

export const Price = styled.p`
  font-family: Bebas Neue;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ButtonAddToCart = styled.button`
  width: 100%;
  margin-top: 49px;
  padding: 18px 83px;
  background: ${Color.Primary};
  color: ${Color.White};
  text-transform: uppercase;
  cursor: pointer;
`;

export const Preview = styled.a`
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  text-decoration: none;
  color: ${Color.Primary};
  margin-top: 40px;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const FirstName = styled.span`
  font-family: Helios;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Secondary};
`;
export const SecondName = styled.span`
  font-family: Helios;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: right;
  color: ${Color.Primary};
`;

export const ResumeContainer = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 72px;
  border-bottom: 1px solid ${Color.Gray};
`;

export const ButtonAuthor = styled.button<{ $isActive: boolean }>`
  padding: 0px 40px 24px;
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  border: none;
  border-bottom: ${({ $isActive }) =>
    $isActive ? "none" : `1px solid ${Color.Primary} `};
  background: none;
  cursor: pointer;
`;

export const ButtonDescription = styled.button<{ $isActive: boolean }>`
  padding: 0px 40px 24px;
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  border: none;
  border-bottom: ${({ $isActive }) =>
    $isActive ? `1px solid ${Color.Primary} ` : "none"};
  background: none;
  cursor: pointer;
`;

export const Definition = styled.p`
  margin-top: 49px;
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Primary};
`;
