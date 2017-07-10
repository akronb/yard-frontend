import React from 'react';
import styled from 'styled-components';
import EventListener from 'react-event-listener';

import { getImageUrl } from '../../utils';

const Gallery = styled.div`
  background-color: rgba(17, 17, 17, 0.95);
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding-top: 4rem;
  padding-bottom: 3.5rem;
  text-align: center;
`;

const Wrapper = styled.div`display: flex;`;

const Slide = styled.img`
  flex-shrink: 0;
  width: 512px;
  height: 512px;
  margin-right: 4rem;
  z-index: 999999;
`;

const Description = styled.div`
  display: inline-block;
  margin: 1.5rem auto 0;
  font-size: 1rem;
  line-height: 1.38rem;
  color: #a9afb6;
`;

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  slide = (i) => {
    console.log(`${i} / ${this.state.activeSlide}`);
    if (i >= 0 && i < this.props.images.length) this.setState({ activeSlide: i });
  };

  translate(i) {
    if (i === this.state.activeSlide) {
      return {
        transform: `translateX(${(i - this.state.activeSlide) * 100}%)`,
        transition: '.2s ease-in-out',
      };
    }
    return {
      transform: `translateX(${(i - this.state.activeSlide) * 100}%)`,
      transition: '.2s ease-in-out',
      cursor: 'pointer',
    };
  }

  handleClick = i => (e) => {
    e.stopPropagation();

    this.slide(i);
  };

  handleKeyDown = (e) => {
    e.stopPropagation();

    if (e.keyCode === 39) this.slide(this.state.activeSlide + 1);
    if (e.keyCode === 37) this.slide(this.state.activeSlide - 1);
  };

  render() {
    return (
      <Gallery onClick={this.props.closePortal}>
        <EventListener target={document} onKeyDown={this.handleKeyDown} />
        <Wrapper>
          {this.props.images.map((image, i) =>
            (<Slide
              style={this.translate(i)}
              onClick={this.handleClick(i)}
              src={getImageUrl(image.id, 1024)}
              key={image.id}
              alt={this.props.name}
            />),
          )}
        </Wrapper>
        <Description onClick={this.handleClick}>
          {this.state.activeSlide + 1}/{this.props.images.length} {this.props.name}
        </Description>
      </Gallery>
    );
  }
}

export default Slideshow;
