// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import { media } from '../../utils/styles';
import type { LocationType } from '../types';
import MapBox from './MapBox';

const Wrapper = styled.div`
  background-color: #fff;

  ${media.tablet`
    padding-bottom: 4rem;
  `};
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `};
`;

const Location = styled(MapBox)`
  flex: 1 1 100%;
  height: 52vw;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);

  ${media.tablet`
    flex: 1 1 calc(50% - .5rem);
    height: 302px;
    margin-top: -9.75rem;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, .3);
    margin-right: 1rem;
  `};
`;

const Places = styled.div`
  background-color: #fff;
  z-index: 10;

  ${media.tablet`
    flex: 1 1 calc(50% - .5rem);
    margin-top: -9.75rem;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, .3);
  `};
`;

const Place = styled.div`
  padding: 1.5rem .75rem;

  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e1;
  }

  ${media.tablet`
    padding: 1.5rem;
  `};
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

type Props = {
  location: LocationType,
};

export default (props: Props) =>
  (<Wrapper>
    <Grid>
      <Row>
        <Location location={props.location} />
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
      </Row>
    </Grid>
  </Wrapper>);
