import styled from "styled-components";
import { Color } from "../../ui";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px 0px;
  margin-bottom: 36px;
  background: ${Color.White};
`;

export const Search = styled.input`
  max-width: 542px;
  width: 100%;
  padding: 16px 20px;
`;

export const UserIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 112px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 168px;
  }
`;

export const SearchResults = styled.div`
  max-width: 543px;
  width: 100%;
  height: 557px;
  margin: 0 auto;
  margin-top: 90px;
  background-color: ${Color.Primary};
`;
