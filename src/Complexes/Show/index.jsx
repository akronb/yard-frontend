import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Carousel from './Carousel';
import Facts from './Facts';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Guide from './Guide';
import Location from './Location';

const Wrapper = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  background: #fff;
`;

export default () => (
  <main>
    <Helmet>
      <title>Жилой комплекс «Полянка/44» | Compass</title>
    </Helmet>
    <Wrapper>
      <Header />
    </Wrapper>
    <Carousel />
    <Wrapper>
      <Facts />
      <Features />
      <Description />
      <Infrastructure />
    </Wrapper>
    <Offers />
    <Guide />
    <Location />
  </main>
  );
