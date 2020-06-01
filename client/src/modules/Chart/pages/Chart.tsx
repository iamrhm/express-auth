import React from "react";

import { AccountContext } from "modules/Account/context/account";

import {
  Wrapper,
  Container,
  SectionWrapper,
  SectionHeader,
  SectionContainer
} from "./styled";

const Chart = (): JSX.Element => {
  const accountInfo = React.useContext(AccountContext);

  const { basicInfo } = accountInfo;

  return (
    <Wrapper>
      <Container>
        <SectionWrapper>
          <SectionHeader>Chart</SectionHeader>
          <SectionContainer>{basicInfo.name}</SectionContainer>
        </SectionWrapper>
      </Container>
    </Wrapper>
  );
};

export default Chart;
