import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-color: #fff;
`;

const Location = styled.img`
  width: 100%;
  height: 302px;
  margin-top: -9.75rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, .3);
`;

const Places = styled.div`
  margin-top: -9.75rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, .3);
  background-color: #fff;
`;

const Place = styled.div`
  padding: 1.5rem;
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e1;
  }
`;

const Name = styled.p`
  margin: 0;
  font-weight: 500;
  color: #3e4247;
`;

const Distance = styled.p`
  margin-top: .5rem;
  margin-bottom: 0px;
  font-size: 16px;
  color: #a9afb6;
`;

export default () => {
  return (
    <Wrapper>
      <Grid>
        <Row>
          <Col lg={6}>
            <Location
              src={`${process.env.PUBLIC_URL}/img/map.png`}
              alt="Жилой комплекс «Полянка/44»"
            />
          </Col>
          <Col lg={6}>
            <Places>
              <Place>
                <Name>Красный Октябрь</Name>
                <Distance>24 минуты, 6 км</Distance>
              </Place>
              <Place>
                <Name>World class</Name>
                <Distance>2 минуты, 300 м</Distance>
              </Place>
              <Place>
                <Name>Третьяковская галерея</Name>
                <Distance>14 минут, 4 км</Distance>
              </Place>
            </Places>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  );
};
