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

export const Title = styled.h2`
  margin-top: 37px;
  font-family: Bebas Neue;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
`;

export const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 544px;
  width: 100%;
  height: 472px;
  background-color: ${Color.Orange};
`;

export const BookImage = styled.img`
  object-fit: cover;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 448px;
  width: 100%;
`;

export const Price = styled.p`
  font-family: Bebas Neue;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Description = styled.h2`
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Primary};
`;

export const FooterContainer = styled.p``;

export const Button = styled.button``;
