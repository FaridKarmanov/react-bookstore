import React from "react";
import { Outlet } from "react-router-dom";
import { StyledLink } from "..";
import { Button, FormContainer, SwitchContainer, Wrapper } from "./styles";

export const Registration = () => {
  return (
    <Wrapper>
      <FormContainer>
        <SwitchContainer>
          <StyledLink to="sign-in">
            <Button>Sign In</Button>
          </StyledLink>
          <StyledLink to="sign-up">
            <Button>Sign Up</Button>
          </StyledLink>
        </SwitchContainer>
        <Outlet />
      </FormContainer>
    </Wrapper>
  );
};
