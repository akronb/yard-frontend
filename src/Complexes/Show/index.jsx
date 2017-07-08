// @flow
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { get } from '../../api';
import type { ComplexType } from '../types';
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

class Show extends React.Component {
  state = {};

  state: ComplexType;

  componentDidMount() {
    this.load();
  }

  componentWillReciveProps(nextProps: Object) {
    if (nextProps !== this.props) this.load();
  }

  load() {
    get(`/complexes/${this.props.match.params.id}`).then((json) => {
      this.setState(json);
    });
  }

  render() {
    const {
      name,
      units,
      fullDescription,
      location = {},
      images = [],
      statistics = {},
      details = {},
      amenities = [],
    } = this.state;

    return (
      <main>
        <Helmet>
          <title>{`${name} | Compass`}</title>
        </Helmet>
        <Wrapper>
          <Header name={name} location={location} />
        </Wrapper>
        <Carousel images={images} />
        <Wrapper>
          <Facts details={details} units={units} />
          <Features statistics={statistics} details={details} />
          {!!fullDescription && <Description fullDescription={fullDescription} />}
          {amenities.length > 0 && <Infrastructure amenities={amenities} />}
        </Wrapper>
        <Offers name={name} />
        <Guide />
        <Location />
      </main>
    );
  }
}

export default Show;
