import React from 'react';
import styled from 'styled-components';
// import EventListener from 'react-event-listener';

import { getImageUrl } from '../../utils';

const Gallery = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  background-color: rgba(17, 17, 17, 0.95);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

const Slide = styled.img`
  height: 100%;
  transform-origin: center bottom;
  transition: opacity .2s ease-in-out;
  &:hover {
    opacity: 1 !important;
  }
`;

const Description = styled.div`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #a9afb6;
`;

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: this.props.activeSlide || 0,
      wrapperHeight: 0,
      justOpened: true,
    };
  }

  componentDidMount() {
    this.getWrapperHeight();
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('resize', this.getWrapperHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('resize', this.getWrapperHeight);
  }

  getWrapperHeight = () => {
    this.setState({ wrapperHeight: this.wrapper.clientHeight });
  };

  calcWidthDiff(scaleRatio) {
    const index = this.state.activeSlide;
    const { width: originalWidth, height: originalHeight } = this.props.images[index];
    const actualHeight = this.state.wrapperHeight;
    // prettier-ignore
    const actualWidth = (actualHeight / originalHeight) * originalWidth;
    // prettier-ignore
    return (actualWidth * (1 - scaleRatio)) / 2;
  }

  slide = (index) => {
    const imagesNum = this.props.images.length;

    if (this.state.justOpened) this.setState({ justOpened: false });

    if (index < 0) this.setState({ activeSlide: imagesNum - 1 });
    else if (index >= imagesNum) this.setState({ activeSlide: 0 });
    else this.setState({ activeSlide: index });
  };

  changeSlide(index) {
    const offset = this.state.activeSlide * -100;
    const scaleRatio = 0.8;
    const scaleDiff = this.calcWidthDiff(0.8);
    const transitionStyle = {
      transition: 'opacity .2s ease-in-out, transform .2s linear',
    };
    let mainStyle;

    if (index === this.state.activeSlide) {
      mainStyle = {
        transform: `translateX(calc(${offset}% + 50vw - 50%))`,
      };
    } else if (index > this.state.activeSlide) {
      mainStyle = {
        transform: `translateX(calc(${offset}% + 50vw - 50% + 4rem - ${scaleDiff}px)) scale(${scaleRatio})`,
        opacity: '.5',
        cursor: 'pointer',
      };
    } else {
      mainStyle = {
        transform: `translateX(calc(${offset}% + 50vw - 50% - 4rem + ${scaleDiff}px)) scale(${scaleRatio})`,
        opacity: '.5',
        cursor: 'pointer',
      };
    }

    if (this.state.justOpened) return mainStyle;
    return { ...mainStyle, ...transitionStyle };
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
        <Wrapper
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
