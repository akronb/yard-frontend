// @flow
import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Intro = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
  color: #3e4247;
`;

const Title = styled.h2`
  margin: 0px;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.5rem;
`;

const Text = styled.p`
  margin: .5rem 0px 0px;
  line-height: 1.5rem;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #000;
  border: none;
  border-radius: 2px;
  color: #fff;
  padding: .8125rem 2rem;
  margin-top: 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
`;

export default () =>
  (<Intro>
    <Grid>
      <Row center="lg">
        <Col lg={8}>
          <Title>Discover Our New Developments</Title>
          <Text>
            Compass brings a modern approach to new development marketing
            and sales. From boutique rental conversions to luxurious
            ground-up condominiums, browse our portfolio of current
            offerings.
          </Text>
          <Button type="button" name="button">
            Contact The Team
          </Button>
        </Col>
      </Row>
    </Grid>
  </Intro>);
