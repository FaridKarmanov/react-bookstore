import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui";

export const StyledCustomLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  max-width: 272px;
  width: 100%;
  color: ${({ $isActive }) => ($isActive ? Color.Gray : Color.Primary)};

  &:active {
    color: ${({ $isActive }) => ($isActive ? Color.Gray : Color.Primary)};
    fill: ${({ $isActive }) =>
      $isActive ? Color.Gray : Color.Primary} !important;
    stroke: ${({ $isActive }) => ($isActive ? Color.Gray : Color.Primary)};
  }
  &:disabled {
    color: ${Color.Gray};
    fill: ${Color.Gray} !important;
    stroke: ${Color.Gray};
  }
`;
