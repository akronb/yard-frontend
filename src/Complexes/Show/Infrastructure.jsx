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

export default () =>
  (<Grid>
    <Heading>Инфраструктура</Heading>
    <Wrapper>
      <Row>
        <Col lg={2}>
          <Text>Бассейн</Text>
        </Col>
        <Col lg={2}>
          <Text>Частная школа</Text>
        </Col>
        <Col lg={2}>
          <Text>Детский сад</Text>
        </Col>
        <Col lg={2}>
          <Text>Бассейн</Text>
        </Col>
        <Col lg={2}>
          <Text>Частная школа</Text>
        </Col>
        <Col lg={2}>
          <Text>Детский сад</Text>
        </Col>
        <Col lg={2}>
          <Text>Частная школа</Text>
        </Col>
        <Col lg={2}>
          <Text>Частная школа</Text>
        </Col>
        <Col lg={2}>
          <Text>Частная школа</Text>
        </Col>
      </Row>
    </Wrapper>
  </Grid>);
