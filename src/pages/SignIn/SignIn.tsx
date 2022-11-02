import React from "react";
import { Button, FormContainer, SwitchContainer, Wrapper } from "./styles";

export const SignIn = () => {
  return (
    <Wrapper>
      <FormContainer>
        <SwitchContainer>
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </SwitchContainer>
      </FormContainer>
    </Wrapper>
  );
};
