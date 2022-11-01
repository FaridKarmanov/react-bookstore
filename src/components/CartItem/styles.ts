import styled from "styled-components";
import { Color } from "../../ui";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 49px;
  margin-bottom: 48px;
  width: 100%;
  height: 242px;
  border-bottom: 1px solid ${Color.Secondary};
`;

export const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.Blue};
  max-width: 256px;
  width: 100%;
  height: 192px;
`;

export const BookImage = styled.img`
  width: 163px;
  height: 191px;
  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 446px;
  width: 100%;
  text-align: left;
`;

export const Title = styled.h2`
  font-family: Bebas Neue;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Primary};
`;

export const Subtitle = styled.h3`
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Secondary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 168px;
  width: 100%;
`;

export const Price = styled.p`
  color: ${Color.Primary};
  font-family: Bebas Neue;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;
