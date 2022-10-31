import styled from "styled-components";
import { Color } from "../../ui";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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
  text-transform: uppercase;
`;

export const TotalContainer = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  max-width: 256px;
  width: 100%;
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

export const Total = styled.span`
  font-family: Bebas Neue;
  font-size: 32px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
`;

export const Button = styled.button`
  padding: 16px 17px;
  background: ${Color.Primary};
  color: ${Color.White};
  text-transform: uppercase;
  cursor: pointer;
`;
