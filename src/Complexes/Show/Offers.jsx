// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import { media } from '../../utils/styles';
import Heading from './Heading';

const Wrapper = styled.div`
  background-color: #f4f5f9;
  padding: 2rem 0px;

  ${media.tablet`
    padding: 4rem 0px;
  `};
`;

const Title = styled(Heading)`
  text-align: left;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1.5rem;

  ${media.tablet`
    text-align: center;
    margin-left: 0px;
    margin-right: 0px;
  `};
`;

const Row = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 0px 1rem;

  ${media.desktop`
    overflow-x: hidden;
    padding: 0px;
  `};
`;

const Card = styled.div`
  flex: 1 0 320px;
  padding: 1.5rem 1.625rem;
  background-color: #fff;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  ${media.desktop`
    flex: 1 0 0;
    max-width: 390px;
    padding: 1.5rem 2rem;
  `};
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
  padding: .75rem 1.5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;

  ${media.desktop`
    padding: .75rem 2rem;
  `};
`;

type Props = {
  name: string,
};

export default (props: Props) =>
  (<Wrapper>
    <Grid>
      <Title>
        Предложения в ЖК «{props.name}»
      </Title>
      <Row>
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
      </Row>
    </Grid>
  </Wrapper>);
