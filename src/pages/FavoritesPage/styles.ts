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

export const EmptyFavorites = styled.h2`
  margin-top: 200px;
  font-family: Helios;
  font-size: 64px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  color: ${Color.Primary};
`;
