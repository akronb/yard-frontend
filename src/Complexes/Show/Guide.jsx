// @flow
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { media } from '../../utils/styles';
import arrowImg from '../../img/arrow-blue.svg';
import Image from '../../Components/Image';

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

const Wrapper = styled.div`
  background-color: #3e4247;

  ${media.tablet`
    padding-top: 2rem;
    padding-bottom: 13.625rem;
  `};
`;

const District = styled.div`
  font-family: "Philosopher", serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 22px;
  color: #a9afb6;
  margin: 3rem 1rem 2rem;

  ${media.tablet`
    margin: 0px 0px 2rem;
  `};

  ${media.desktop`
    font-size: 1.5rem;
    line-height: 27px;
    margin: 0px 0px 3rem;
  `};
`;

const Title = styled.div`
  font-family: "Philosopher", serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 44px;
  color: #ffffff;
  margin: 0px 1rem;

  ${media.tablet`
    margin: 0px;
  `};

  ${media.desktop`
    font-size: 3rem;
    line-height: 60px;
  `};
`;

const GuideLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 1rem;
  text-align: left;
  line-height: 24px;
  color: #00779a;
  margin: 2rem 1rem 3rem;

  &:after {
    content: url(${arrowImg});
    margin-left: .5rem;
  }

  ${media.tablet`
    margin: 2rem 0px 0px;
  `};

  ${media.desktop`
    margin: 3rem 0px 0px;
  `};
`;

const Photo = styled(Image)`
  width: 100%;
`;

export default () =>
  (<Wrapper>
    <Grid>
      <Row middle="sm">
        <Col sm={6} xs={12} last="xs" first="sm">
          <District>Якиманка</District>
          <Title>Исторический центр Москвы в двух километрах&nbsp;от Кремля</Title>
          <GuideLink to="#">Гид по Якиманке</GuideLink>
        </Col>
        <Col sm={6} xs={12}>
          <Photo
            x1={`${PUBLIC_URL}/img/polyanka-photo.jpg`}
            x2={`${PUBLIC_URL}/img/polyanka-photo@2x.jpg`}
            title="Якиманка"
          />
        </Col>
      </Row>
    </Grid>
  </Wrapper>);
