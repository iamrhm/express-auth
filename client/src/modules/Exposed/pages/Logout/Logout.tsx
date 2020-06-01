import React from "react";

import {
  Container,
  FormWrapper,
  FormGroup,
  FormAction,
  ButtonInput
} from "./styled";

const LogoutPage = (): JSX.Element => (
  <Container>
    <FormWrapper>
      <FormGroup>
        <FormAction>
          <ButtonInput onClick={(e: any): void => e.preventDefault()}>
            Log Out
          </ButtonInput>
        </FormAction>
      </FormGroup>
    </FormWrapper>
  </Container>
);

export default LogoutPage;
