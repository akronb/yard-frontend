// @flow
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import SeparationLine from './SeparationLine';
import Heading from './Heading';

const Wrapper = styled.section`margin-top: .5rem;`;

const Text = styled.article`
  margin: 0;
  color: #3e4247;
  line-height: 25px;
  white-space: pre-wrap;
`;

type Props = {
  fullDescription: string,
};

export default (props: Props) =>
  (<Wrapper>
    <Grid>
      <Row>
        <Col lg={2}>
          <Heading>Описание</Heading>
        </Col>
        <Col lg={10}>
          <Text>
            {props.fullDescription}
          </Text>
        </Col>
      </Row>
      <SeparationLine />
    </Grid>
  </Wrapper>);
