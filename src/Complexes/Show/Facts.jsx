// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import { media } from '../../utils/styles';
import type { DetailsType } from '../types';
import SeparationLine from './SeparationLine';
import Heading from './Heading';
import Pluralizer from '../../Components/Pluralizer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.phone`
    flex-direction: row;
  `};
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
  font-size: 1.5rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${media.phone`
    margin-bottom: 0px;
    &:not(:last-child) {
      margin-right: 3rem;
    }
  `};
`;

type Props = {
  units: ?number,
  details: DetailsType,
};

export default (props: Props) => {
  const { details = {}, units } = props;

  return (
    <Grid>
      <Wrapper>
        {!!units &&
          units > 0 &&
          <Fact>
            {units}
            <Subheading>
              <Pluralizer
                number={units}
                one="предложение"
                few="предложения"
                other="предложений"
                combine={false}
              />
            </Subheading>
          </Fact>}
        {!!details.architect &&
          <Fact>
            {details.architect}
            <Subheading>архитектор</Subheading>
          </Fact>}
        {!!details.developer &&
          <Fact>
            {details.developer}
            <Subheading>застройщик</Subheading>
          </Fact>}
      </Wrapper>
      <SeparationLine />
    </Grid>
  );
};
