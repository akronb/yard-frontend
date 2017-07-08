// @flow
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

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
            (<Col lg={2}>
              <Text>
                {amenity}
              </Text>
            </Col>),
          )}
        </Row>
      </Wrapper>
    </Grid>
  );
};
