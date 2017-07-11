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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  transition: transform .2s ease-in-out;
`;

const Slide = styled.img`
  height: ${100 / 1.2}%;
  width: auto;
  transition: .2s ease-in-out;
  &:not(:last-child) {
    margin-right: 4rem;
  }
`;

const Description = styled.div`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.38rem;
  color: #a9afb6;
`;

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      wrapperHeight: 0,
    };
  }

  componentDidMount() {
    this.getWrapperHeight();
  }

  getWrapperHeight() {
    this.setState({ wrapperHeight: this.wrapper.clientHeight });
  }

  calcWidth(index, actualHeight) {
    const { width: originalWidth, height: originalHeight } = this.props.images[index];
    // prettier-ignore
    return (actualHeight / originalHeight) * originalWidth;
  }

  centerSlide() {
    const ident = this.props.images.reduce((accumulator, currentValue, currentIndex) => {
      const margin = 64;
      const { activeSlide, wrapperHeight } = this.state;

      if (currentIndex === activeSlide) {
        // prettier-ignore
        return accumulator + (this.calcWidth(currentIndex, wrapperHeight) * 0.5);
      }
      if (currentIndex < activeSlide) {
        return accumulator + margin + this.calcWidth(currentIndex, wrapperHeight / 1.2);
      }
      return accumulator;
    }, 0);

    return Math.round(ident);
  }

  slide = (index) => {
    const imagesNum = this.props.images.length;

    if (index < 0) this.setState({ activeSlide: imagesNum - 1 });
    else if (index >= imagesNum) this.setState({ activeSlide: 0 });
    else this.setState({ activeSlide: index });
  };

  changeSlide(index) {
    if (index === this.state.activeSlide) {
      return {
        height: '100%',
      };
    }
    return {
      cursor: 'pointer',
    };
  }

  moveSlide() {
    return {
      transform: `translateX(calc(50% - ${this.centerSlide()}px))`,
    };
  }

  handleClick = index => (event) => {
    event.stopPropagation();
    this.slide(index);
  };

  handleKeyDown = (event) => {
    event.stopPropagation();

    if (event.keyCode === 39) this.slide(this.state.activeSlide + 1);
    if (event.keyCode === 37) this.slide(this.state.activeSlide - 1);
  };

  render() {
    return (
      <Gallery onClick={this.props.closePortal}>
        <EventListener target={document} onKeyDown={this.handleKeyDown} />
        <Wrapper
          style={this.moveSlide()}
          innerRef={(comp) => {
            this.wrapper = comp;
          }}
        >
          {this.props.images.map((image, i) =>
            (<Slide
              src={getImageUrl(image.id, 1024)}
              style={this.changeSlide(i)}
              onClick={this.handleClick(i)}
              key={image.id}
              alt={this.props.name}
            />),
          )}
        </Wrapper>
        <Description>
          {this.state.activeSlide + 1}/{this.props.images.length} {this.props.name}
        </Description>
      </Gallery>
    );
  }
}

export default Slideshow;
