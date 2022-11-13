import styled from "styled-components";
import { Color } from "../../ui";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  max-width: 544px;
  width: 100%;
  border: 1px solid ${Color.Gray};
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 54px;
  padding: 0 20px;
`;

export const Button = styled.button`
  width: 100%;
  height: 54px;
  font-family: Exo 2;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  border: none;
  color: ${Color.Primary};
  background-color: ${Color.White};
  cursor: pointer;
`;
