// @flow
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

type Props = {
  propertiesCount: number,
};

export default (props: Props) =>
  (<Grid>
    <Heading>Характеристики</Heading>
    <Row>
      <Col lg={4}>
        <Feature>
          <Label>Количество квартир</Label>
          <Value>
            {props.propertiesCount}
          </Value>
        </Feature>
        <Feature>
          <Label>Статус</Label>
          <Value>Квартиры</Value>
        </Feature>
        <Feature>
          <Label>Цены</Label>
          <Value>от 5.3 до 143.5 млн</Value>
        </Feature>
        <Feature>
          <Label>Безопасность</Label>
          <Value>от 5.3 до 143.5 млн</Value>
        </Feature>
      </Col>
      <Col lg={4}>
        <Feature>
          <Label>Конструкция корпусов</Label>
          <Value>
            {props.propertiesCount}
          </Value>
        </Feature>
        <Feature>
          <Label>Площадь</Label>
          <Value>
            {props.propertiesCount}
          </Value>
        </Feature>
        <Feature>
          <Label>Высота потолков</Label>
          <Value>
            {props.propertiesCount}
          </Value>
        </Feature>
        <Feature>
          <Label>Обслуживание</Label>
          <Value>
            {props.propertiesCount}
          </Value>
        </Feature>
      </Col>
      <Col lg={4}>
        <Feature>
          <Label>Начало строительства:</Label>
          <Value>
            {props.propertiesCount}
          </Value>
        </Feature>
        <Feature>
          <Label>Конец строительства:</Label>
          <Value>
            {props.propertiesCount}
          </Value>
        </Feature>
        <Feature>
          <Label>Наземная парковка:</Label>
          <Value>
            {props.propertiesCount}
          </Value>
        </Feature>
        <Feature>
          <Label>Подземная парковка:</Label>
          <Value>
            {props.propertiesCount}
          </Value>
        </Feature>
      </Col>
    </Row>
  </Grid>);
