import styled from "styled-components";
import { Color } from "../../ui";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 250px auto;
  max-width: 544px;
  width: 100%;
  padding: 40px;
  border: 1px solid ${Color.Gray};
`;

export const Header = styled.h2`
  margin-bottom: 32px;
  font-family: Bebas Neue;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-align: left;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-family: Helios;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 20px;
  margin-bottom: 16px;
  border: 1px solid ${Color.Gray};
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px 190px;
  background: ${Color.Primary};
  color: ${Color.White};
  text-transform: uppercase;
  cursor: pointer;
`;
