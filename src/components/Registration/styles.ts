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
  align-items: center;
  justify-content: space-between;
  height: 54px;
  padding: 0 33px;
  /* border-bottom: 1px solid ${Color.Secondary}; */
`;

export const Button = styled.button`
  max-width: 239px;
  width: 100%;
  height: 54px;
  text-align: center;
  border: none;
  /* border-bottom: 1px solid ${Color.Secondary}; */
  color: ${Color.Primary};
  background-color: ${Color.White};
  cursor: pointer;
`;
