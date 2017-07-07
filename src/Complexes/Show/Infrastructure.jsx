// @flow
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import type { AmenitiesType } from '../types';
import Heading from './Heading';

const Wrapper = styled.div`
  margin-top: .5rem;
  margin-bottom: 2.5rem;
`;

const Text = styled.p`
  margin-top: .5rem;
  margin-bottom: 0px;
  color: #3e4247;
`;

type Props = {
  amenities: AmenitiesType,
};

export default (props: Props) => {
  const { amenities = [] } = props;

  return (
    <Grid>
      <Heading>Инфраструктура</Heading>
      <Wrapper>
        <Row>
          {amenities.map(data =>
            (<Col lg={2}>
              <Text>
                {data}
              </Text>
            </Col>),
          )}
        </Row>
      </Wrapper>
    </Grid>
  );
};
