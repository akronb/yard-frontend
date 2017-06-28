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

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(`https://api.jqestate.ru/v1/complexes/${this.props.match.params.id}`)
      .then(responce => responce.json())
      .then((json) => {
        this.setState(json);
      });
  }

  render() {
    console.log(this.state);
    const { name, location = [], images = [], statistics = [] } = this.state;

    return (
      <main>
        <Helmet>
          <title>{`${name} | Compass`}</title>
        </Helmet>
        <Wrapper>
          <Header name={name} location={location} />
        </Wrapper>
        <Carousel imageList={images} />
        <Wrapper>
          <Facts />
          <Features propCount={statistics.propertiesCount} />
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
