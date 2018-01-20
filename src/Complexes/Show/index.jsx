// @flow
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { media } from '../../utils/styles';
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
  padding: .5rem;
  background: #fff;

  ${media.tablet`
    padding: 1rem 0px 1.5rem;
  `};
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
        <Carousel images={images} name={name} />
        <Wrapper>
          <Facts details={details} units={units} />
          <Features statistics={statistics} details={details} />
          {!!fullDescription && <Description fullDescription={fullDescription} />}
          {amenities.length > 0 && <Infrastructure amenities={amenities} />}
        </Wrapper>
        <Offers name={name} />
        <Guide />
        {Object.keys(location).length !== 0 && <Location location={location} />}
      </main>
    );
  }
}

export default Show;
