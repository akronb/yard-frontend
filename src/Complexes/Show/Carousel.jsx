// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Portal from 'react-portal';

import { getImageUrl } from '../../utils/images';
import Slideshow from './Slideshow';
import Pluralizer from '../../Components/Pluralizer';

const CarouselWrapper = styled.div`height: 400px;`;

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  height: 400px;
`;

const Photo = styled.img`
  max-height: 400px;
  transition: .15s ease-in-out;
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: .8;
  }
`;

const Button = styled.button`
  position: relative;
  display: block;
  margin-top: -2.625rem;
  cursor: pointer;
  background-color: #00779a;
  border: none;
  border-radius: 2px;
  color: #00779a;
  padding: .5rem 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: .625rem;
  line-height: .625rem;
  color: #fff;
`;

// TODO: better flow cover

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      isOpened: false,
    };
  }

  openPortal = (index = 0) => (event) => {
    event.stopPropagation();
    this.setState({ active: index, isOpened: true });
  };

  render() {
    return (
      <CarouselWrapper>
        <Wrapper>
          {this.props.images.map((image, index) =>
            (<Photo
              onClick={this.openPortal(index)}
              src={getImageUrl(image.id, 512)}
              key={image.id}
              alt={this.props.name}
            />),
          )}
        </Wrapper>
        <Grid>
          <Button onClick={this.openPortal()}>
            <Pluralizer
              number={this.props.images.length}
              one="фотография"
              few="фотографии"
              other="фотографий"
              combine
            />
          </Button>
        </Grid>
        <Portal closeOnEsc isOpened={this.state.isOpened}>
          <Slideshow images={this.props.images} name={this.props.name} active={this.state.active} />
        </Portal>
      </CarouselWrapper>
    );
  }
}

export default Carousel;
