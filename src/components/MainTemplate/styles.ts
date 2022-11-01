import styled from "styled-components";
import { Color } from "../../ui";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (min-width: 1124px) {
    padding: 0;
  }
`;

export const Footer = styled.div`
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 95px;
  border-top: 1px solid ${Color.Secondary};
`;

export const Year = styled.h2`
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Secondary};
`;

export const Text = styled.h2`
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Secondary};
`;
