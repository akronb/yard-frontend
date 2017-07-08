// @flow
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Heading from './Heading';

const Wrapper = styled.div`
  background-color: #f4f5f9;
  padding: 4rem 0px;
`;

const Title = styled(Heading)`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  padding: 1.5rem 2rem;
  background-color: #fff;
`;

const CardTitle = styled.h3`
  margin: 0px;
  font-family: "Philosopher", serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.375rem;
  color: #3e4247;
`;

const Feature = styled.div`margin-top: 1.5rem;`;

const Label = styled.div`
  margin: 0px;
  color: #a9afb6;
  margin-bottom: .625rem;
`;

const Value = styled.div`
  margin: 0px;
  color: #3e4247;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #000;
  border: none;
  border-radius: 2px;
  color: #fff;
  padding: .75rem 2rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
`;

type Props = {
  name: string,
};

export default (props: Props) =>
  (<Wrapper>
    <Grid>
      <Title>
        Предложения в {props.name}
      </Title>
      <Row>
        <Col lg={4}>
          <Card>
            <CardTitle>1-комнатные квартиры</CardTitle>
            <Feature>
              <Label>Площадь</Label>
              <Value>от 59 до 120 м²</Value>
            </Feature>
            <Feature>
              <Label>Стоимость</Label>
              <Value>от 20.3 до 84.2 млн руб</Value>
            </Feature>
            <ButtonWrapper>
              <Button>Посмотреть предложения</Button>
            </ButtonWrapper>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <CardTitle>2-комнатные квартиры</CardTitle>
            <Feature>
              <Label>Площадь</Label>
              <Value>от 59 до 120 м²</Value>
            </Feature>
            <Feature>
              <Label>Стоимость</Label>
              <Value>от 20.3 до 84.2 млн руб</Value>
            </Feature>
            <ButtonWrapper>
              <Button>Посмотреть предложения</Button>
            </ButtonWrapper>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <CardTitle>3-комнатные квартиры</CardTitle>
            <Feature>
              <Label>Площадь</Label>
              <Value>от 59 до 120 м²</Value>
            </Feature>
            <Feature>
              <Label>Стоимость</Label>
              <Value>от 20.3 до 84.2 млн руб</Value>
            </Feature>
            <ButtonWrapper>
              <Button>Посмотреть предложения</Button>
            </ButtonWrapper>
          </Card>
        </Col>
      </Row>
    </Grid>
  </Wrapper>);
