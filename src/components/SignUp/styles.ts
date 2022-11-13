import styled from "styled-components";
import { Color } from "../../ui";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 544px;
  width: 100%;
  padding: 20px;
`;

export const Title = styled.h2`
  font-family: Helios;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Text = styled.p`
  font-family: Helios;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Secondary};
`;

export const ErrorText = styled.p`
  font-family: Helios;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Red};
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
