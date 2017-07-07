// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import type { DetailsType } from '../types';
import SeparationLine from './SeparationLine';
import Heading from './Heading';

const Wrapper = styled.div`display: flex;`;

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

type Props = {
  details: DetailsType,
};

export default (props: Props) => {
  const { details = {} } = props;

  return (
    <Grid>
      <Wrapper>
        <Fact>
          950
          <Subheading>предложений</Subheading>
        </Fact>
        <Fact>
          {details.architect}
          <Subheading>архитектор</Subheading>
        </Fact>
        {!!details.developer &&
          <Fact>
            Группа «ПСН»
            <Subheading>застройщик</Subheading>
          </Fact>}
      </Wrapper>
      <SeparationLine />
    </Grid>
  );
};
