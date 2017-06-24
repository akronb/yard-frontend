import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import SeparationLine from './SeparationLine';
import Heading from './Heading';

const Wrapper = styled.div`
  display: flex;
`;

const Subheading = styled.small`
  display: block;
  margin-top: .625rem;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300;
  font-size: .875rem;
  line-height: 22px;
  color: #a9afb6;
`;

const Fact = styled(Heading)`
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

export default () =>
  (<Grid>
    <Wrapper>
      <Fact>
        950
        <Subheading>предложений</Subheading>
      </Fact>
      <Fact>
        John McAslan + Partners
        <Subheading>архитектор</Subheading>
      </Fact>
      <Fact>
        Группа «ПСН»
        <Subheading>застройщик</Subheading>
      </Fact>
    </Wrapper>
    <SeparationLine />
  </Grid>);
