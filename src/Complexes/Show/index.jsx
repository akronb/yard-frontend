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
    const { name, location = {}, images = [], statistics = {} } = this.state;
    const { propertiesCount } = statistics;

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
          <Facts />
          <Features propertiesCount={propertiesCount} />
          <Description />
          <Infrastructure />
        </Wrapper>
        <Offers />
        <Guide />
        <Location />
      </main>
    );
  }
}

export default Show;
