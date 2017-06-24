import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import arrowImg from '../../img/arrow-blue.svg';
import Image from '../../Image';

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 13.625rem;
  background-color: #3e4247;
`;

const District = styled.div`
  font-family: "Philosopher", serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 27px;
  color: #a9afb6;
  margin-bottom: 3rem;
`;

const Title = styled.div`
  font-family: "Philosopher", serif;
  font-size: 3rem;
  font-weight: bold;
  line-height: 60px;
  color: #ffffff;
`;

const GuideLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 16px;
  text-align: left;
  line-height: 24px;
  color: #00779a;
  margin-top: 3rem;
  &:after {
    content: url(${arrowImg});
    margin-left: .5rem;
  }
`;

const Photo = styled(Image)`
  width: 100%;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row middle="lg">
        <Col lg={6}>
          <District>Якиманка</District>
          <Title>
              Исторический центр Москвы в двух километрах&nbsp;от Кремля
            </Title>
          <GuideLink to="#">Гид по Якиманке</GuideLink>
        </Col>
        <Col lg={6}>
          <Photo x1="polyanka-photo.jpg" x2="polyanka-photo@2x.jpg" title="Якиманка" />
        </Col>
      </Row>
    </Grid>
  </Wrapper>
  );
