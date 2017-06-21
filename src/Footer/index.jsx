import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import arrowImg from '../img/arrow.svg';

const Footer = styled.footer`
  background-color: #111;
  color: #a9afb6;
  padding: 2rem 0px;
  font-size: .875rem;
  font-weight: 300;
`;

const Info = styled.p`
  margin-top: .5rem;
  margin-bottom: 0px;
  &:last-child {
    margin-top: 1rem;
  }
`;

const Title = styled.h4`
  font-weight: 700;
  color: #646971;
  margin: 0px;
`;

const Line = styled.hr`
  border: 0;
  height: 2px;
  background-color: #646971;
  margin-top: 0px;
  margin-bottom: 16px;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  display: inline-block;
  font-weight: 300;
  color: #fff;
  text-decoration: none;
  margin-top: 8px;
`;

const LinkBig = Link.extend`
  margin-top: 1rem;
  &:after {
  content: url(${arrowImg});
  margin-left: .5rem;
  }
`;

const Legal = styled.p`
  padding-top: 6rem;
  margin: 0px;
  font-size: .687rem;
  text-align: left;
  line-height: 1.15rem;
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col lg={2}>
            <Title>ООО «Ярд»</Title>
            <Info>ОГРН 1175074002531</Info>
            <Info>ИНН 5036165365</Info>
            <Info>+7 (999) 821-14-88</Info>
          </Col>
          <Col lgOffset={2} lg={2}>
            <Line />
            <Title>Жилые комплексы</Title>
            <Menu>
              <Link href="">ВТБ Арена Парк</Link>
              <Link href="">Садовые кварталы</Link>
              <Link href="">Резиденция Монэ</Link>
              <LinkBig href="">
                Все ЖК Москвы
              </LinkBig>
            </Menu>
          </Col>
          <Col lg={2}>
            <Line />
            <Title>Компания</Title>
            <Menu>
              <Link href="">Команда</Link>
              <Link href="">О компании</Link>
            </Menu>
          </Col>
        </Row>
        <Row>
          <Col lgOffset={4} lg={8}>
            <Legal>
              Любая информация, представленная на данном сайте, носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями статьи 437 ГК
              РФ. © ООО «Ярд», 2017
            </Legal>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
};
