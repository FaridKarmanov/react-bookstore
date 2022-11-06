import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, FormContainer, SwitchContainer, Wrapper } from "./styles";

export const Registration = () => {
  return (
    <Wrapper>
      <FormContainer>
        <SwitchContainer>
          <Link to="sign-in">
            <Button>Sign In</Button>
          </Link>
          <Link to="sign-up">
            <Button>Sign Up</Button>
          </Link>
        </SwitchContainer>
        <Outlet />
      </FormContainer>
    </Wrapper>
  );
};
