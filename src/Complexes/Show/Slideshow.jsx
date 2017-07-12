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
  flex-grow: 0;
  height: 100%;
`;

const Slide = styled.img`
  height: 100%;
  transition: .2s ease-in-out;
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
    };
  }

  componentDidMount() {
    document.addEventListener('onKeyDown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('onKeyDown', this.handleKeyDown);
  }

  slide = (index) => {
    const imagesNum = this.props.images.length;

    if (index < 0) this.setState({ activeSlide: imagesNum - 1 });
    else if (index >= imagesNum) this.setState({ activeSlide: 0 });
    else this.setState({ activeSlide: index });
  };

  changeSlide(index) {
    const offset = this.state.activeSlide * -100;

    if (index === this.state.activeSlide) {
      return {
        transform: `translateX(calc(${offset}% + 50vw - 50% - ${1}px))`,
      };
    }
    if (index > this.state.activeSlide) {
      return {
        transform: `translateX(calc(${offset}% + 50vw - 50% + 4rem - ${1}px)) scale(0.8)`,
        transformOrigin: 'center bottom',
        opacity: '.5',
      };
    }
    return {
      transform: `translateX(calc(${offset}% + 50vw - 50% - 4rem - ${1}px)) scale(0.8)`,
      transformOrigin: 'center bottom',
      opacity: '.5',
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
        <Wrapper>
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
