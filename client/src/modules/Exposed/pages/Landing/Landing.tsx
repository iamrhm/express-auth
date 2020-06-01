import React from "react";
import { Link } from "react-router-dom";

import { Container, LinkWrapper } from "./styled";

const LandingPage = (): JSX.Element => (
  <Container>
    <LinkWrapper>
      <Link to="/login">Login</Link>
    </LinkWrapper>
    <LinkWrapper>
      <Link to="/registration">Registration</Link>
    </LinkWrapper>
  </Container>
);

export default LandingPage;
