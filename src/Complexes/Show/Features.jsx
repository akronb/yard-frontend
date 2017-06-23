import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Heading from './Heading';

const Feature = styled.dl`
  display: flex;
  margin: 0;
  &:first-child {
    margin-top: 1rem;
  }
  &:not(:last-child) {
    margin-bottom: .5rem;
  }
`;

const Label = styled.dd`
  width: 50%;
  margin: 0px;
  line-height: 22px;
  color: #a9afb6;
`;

const Value = styled.dt`
  width: 50%;
  margin: 0px;
  font-weight: 500;
  line-height: 25px;
  color: #3e4247;
`;

export default () => {
  return (
    <Grid>
      <Heading>Характеристики</Heading>
      <Row>
        <Col lg={4}>
          <Feature>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Feature>
          <Feature>
            <Label>Статус:</Label>
            <Value>Квартиры</Value>
          </Feature>
          <Feature>
            <Label>Цены:</Label>
            <Value>от 5.3 до 143.5 млн</Value>
          </Feature>
        </Col>
        <Col lg={4}>
          <Feature>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Feature>
          <Feature>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Feature>
          <Feature>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Feature>
        </Col>
        <Col lg={4}>
          <Feature>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Feature>
          <Feature>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Feature>
          <Feature>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Feature>
        </Col>
      </Row>
    </Grid>
  );
};
