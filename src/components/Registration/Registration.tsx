import React from "react";
import { Outlet } from "react-router-dom";
import { Button, FormContainer, SwitchContainer, Wrapper } from "./styles";

export const Registration = () => {
  return (
    <Wrapper>
      <FormContainer>
        <SwitchContainer>
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </SwitchContainer>
      </FormContainer>
      <Outlet />
    </Wrapper>
  );
};
