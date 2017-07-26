// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import { media } from '../../utils/styles';
import type { DetailsType, StatisticsType } from '../types';
import { kinds, securityKinds, constructionKinds, quarters } from '../dictionaries';
import Heading from './Heading';

const Row = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0px -1rem 2rem;

  ${media.tablet`
    margin: 0px 0px 3rem;
  `};
`;

const Col = styled.div`
  flex: 1 0 389px;

  &:first-child {
    margin-left: 1rem;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }

  ${media.tablet`
    &:first-child {
      margin-left: 0rem;
    }
  `};
`;

const Feature = styled.dl`
  display: flex;
  margin-top: 0px;
  margin-bottom: .5rem;

  &:first-child {
    margin-top: 1rem;
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
  details: DetailsType,
  statistics: StatisticsType,
};

export default (props: Props) => {
  const { details = {}, statistics = {} } = props;
  const {
    propertyKind,
    security,
    constructionKind,
    maintenanceCosts,
    startQuarter,
    startYear,
    commissioningQuarter,
    commissioningYear,
    parkings,
    undergroundGarages,
    ceilHeight = {},
  } = details;
  const { propertiesCount, price = {}, totalArea = {} } = statistics;
  const { from: priceFrom = {}, to: priceTo = {} } = price;

  return (
    <Grid>
      <Heading>Характеристики</Heading>
      <Row>
        <Col>
          {!!propertiesCount &&
            <Feature>
              <Label>Количество квартир</Label>
              <Value>
                {propertiesCount}
              </Value>
            </Feature>}
          {!!propertyKind &&
            <Feature>
              <Label>Статус</Label>
              <Value>
                {kinds[propertyKind]}
              </Value>
            </Feature>}
          {!!priceFrom.rub &&
            !!priceTo.rub &&
            <Feature>
              <Label>Цены</Label>
              <Value>
                от {(priceFrom.rub / 1000000).toFixed(1)} до {(priceTo.rub / 1000000).toFixed(1)}{' '}
                млн
              </Value>
            </Feature>}
          {!!security &&
            <Feature>
              <Label>Безопасность</Label>
              <Value>
                {securityKinds[security]}
              </Value>
            </Feature>}
        </Col>
        <Col>
          {!!constructionKind &&
            <Feature>
              <Label>Конструкция корпусов</Label>
              <Value>
                {constructionKinds[constructionKind]}
              </Value>
            </Feature>}
          {!!totalArea.from &&
            !!totalArea.to &&
            <Feature>
              <Label>Площадь</Label>
              <Value>
                от {Math.round(totalArea.from)} до {Math.round(totalArea.to)} м²
              </Value>
            </Feature>}
          {!!ceilHeight.from &&
            !!ceilHeight.to &&
            <Feature>
              <Label>Высота потолков</Label>
              <Value>
                от {Math.round(ceilHeight.from * 100) / 100} до{' '}
                {Math.round(ceilHeight.to * 100) / 100} м
              </Value>
            </Feature>}
          {!!maintenanceCosts &&
            <Feature>
              <Label>Обслуживание</Label>
              <Value>
                {maintenanceCosts} руб / м² / месяц
              </Value>
            </Feature>}
        </Col>
        <Col>
          {!!startQuarter &&
            !!startYear &&
            <Feature>
              <Label>Начало строительства:</Label>
              <Value>
                {quarters[startQuarter]} квартал {startYear} года
              </Value>
            </Feature>}
          {!!commissioningQuarter &&
            !!commissioningYear &&
            <Feature>
              <Label>Конец строительства:</Label>
              <Value>
                {quarters[commissioningQuarter]} квартал {commissioningYear} года
              </Value>
            </Feature>}
          <Feature>
            <Label>Наземная парковка:</Label>
            <Value>
              {!!parkings && parkings !== 0 ? `${parkings} м/м` : 'Нет'}
            </Value>
          </Feature>
          <Feature>
            <Label>Подземная парковка:</Label>
            <Value>
              {!!undergroundGarages && undergroundGarages !== 0
                ? `${undergroundGarages} м/м`
                : 'Нет'}
            </Value>
          </Feature>
        </Col>
      </Row>
    </Grid>
  );
};
