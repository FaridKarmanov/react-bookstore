import styled from "styled-components";
import { Color } from "../../ui";

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: grid;
  height: 100vh;
  width: 100%;
  margin-top: 108px;
  min-height: 100%;
  background: rgba(49, 48, 55, 0.5);
`;

export const Container = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 368px;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  background: ${Color.White};
  color: ${Color.Primary};

  @media screen and (min-width: 1120px) {
    margin-right: 0;
  }
`;

export const Search = styled.input`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 100px;
  padding: 16px 20px;
`;

export const Title = styled.h2`
  font-family: Bebas Neue;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
`;
