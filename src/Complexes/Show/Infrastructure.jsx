// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import { media } from '../../utils/styles';
import Heading from './Heading';

const Wrapper = styled.div`
  margin-top: .5rem;
  margin-bottom: 2rem;

  ${media.tablet`
    margin-bottom: 2.5rem;
  `};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.desktop`
    margin-left: -.5rem;
    margin-right: -.5rem;
  `};
`;

const Text = styled.p`
  box-sizing: border-box;
  margin-top: .5rem;
  margin-bottom: 0px;
  color: #3e4247;
  padding-right: 1.5rem;

  ${media.tablet`
    flex: 0 0 25%;
  `};

  ${media.desktop`
    padding-left: .5rem;
    padding-right: .5rem;
    flex: 0 0 16.66666667%;
  `};
`;

type Props = {
  amenities: Array<string>,
};

export default (props: Props) => {
  const { amenities = [] } = props;

  return (
    <Grid>
      <Heading>Инфраструктура</Heading>
      <Wrapper>
        <Row>
          {amenities.map(amenity =>
            (<Text>
              {amenity}
            </Text>),
          )}
        </Row>
      </Wrapper>
    </Grid>
  );
};
