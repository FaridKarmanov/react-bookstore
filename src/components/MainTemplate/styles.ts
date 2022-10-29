import styled from "styled-components";

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
