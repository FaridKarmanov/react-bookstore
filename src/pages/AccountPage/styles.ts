import styled from "styled-components";
import { Color } from "../../ui";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  max-width: 256px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1120x;
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  font-family: Helios;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
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

export const SubTitle = styled.h2`
  font-family: Helios;
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 20px;
  margin-bottom: 16px;
  border: 1px solid ${Color.Gray};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ButtonSave = styled.button`
  max-width: 306px;
  width: 100%;
  height: 56px;
  margin-bottom: 24px;
  padding: 16px 0;
  background: ${Color.Primary};
  color: ${Color.White};
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;

export const ButtonCancel = styled.button`
  max-width: 306px;
  height: 56px;
  width: 100%;
  padding: 16px 0;
  background: ${Color.White};
  color: ${Color.Primary};
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;
