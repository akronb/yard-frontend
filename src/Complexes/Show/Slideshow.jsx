import React from 'react';
import styled from 'styled-components';

import { getImageUrl } from '../../utils/images';
import { sizes, media } from '../../utils/styles';

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
  ${media.giant`
    padding-top: 2rem;
    padding-bottom: 1.5rem;
  `};
  ${media.desktop`
    padding: 0;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100%;
`;

const Slide = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  will-change: transform, opacity;
  transition: .2s linear;
  transform-origin: center bottom 0px;
  ${media.desktop`
    position: absolute;
    top: 50%;
    left: 50%;
    height: auto;
  `};
`;

const Description = styled.div`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #a9afb6;
  ${media.desktop`
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translate(-50%, 0);
    padding: .125rem .25rem;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, .9);
    background-color: rgba(0, 0, 0, .5);
  `};
`;

const Control = styled.div`
  position: absolute;
  top: 0;
  width: 50px;
  height: 100%;
  z-index: 100;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, .15);
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const ControlPrev = styled(Control)`
  left: 0;
`;

const ControlNext = styled(Control)`
  right: 0;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 15px;
  width: 15px;
  border: 1px solid #fff;
  border-width: 2px 2px 0 0;
`;

const ArrowRight = styled(Arrow)`
  transform: translate(-50%, -50%) rotate(45deg);
`;

const ArrowLeft = styled(Arrow)`
  transform: translate(-50%, -50%) rotate(225deg);
`;

const Close = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 18px;
  height: 18px;
  padding: 16px;
  z-index: 200;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, .15);
  }
  &:before,
  &:after {
    position: absolute;
    left: 24px;
    content: ' ';
    height: 21px;
    width: 2px;
    background-color: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active || 0,
      windowWidth: 0,
      wrapperHeight: 0,
      justOpened: true,
    };
  }

  componentDidMount() {
    this.getWrapperHeight();
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('resize', this.getWrapperHeight);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('resize', this.getWrapperHeight);
  }

  getWrapperHeight = () => {
    this.setState({ wrapperHeight: this.wrapper.clientHeight });
    this.setState({ windowWidth: window.innerWidth });
  };

  calcWidthDiff(scaleRatio) {
    const index = this.state.active;
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

    if (index < 0) this.setState({ active: imagesNum - 1 });
    else if (index >= imagesNum) this.setState({ active: 0 });
    else this.setState({ active: index });
  };

  changeSlide(index) {
    const mobileOffset = (index - this.state.active) * 100;
    const offset = this.state.active * -100;
    const scaleRatio = 0.8;
    const scaleDiff = this.calcWidthDiff(scaleRatio);

    if (this.state.wrapperHeight === 0) {
      return { display: 'none' };
    }

    if (this.state.windowWidth <= sizes.desktop) {
      return {
        transform: `translate(calc(${mobileOffset}vw - 50%), -50%)`,
      };
    }

    if (index === this.state.active) {
      return {
        transform: `translateX(calc(${offset}% + 50vw - 50%))`,
      };
    } else if (index > this.state.active) {
      return {
        transform: `translateX(calc(${offset}% + 50vw - 50% + 4rem - ${scaleDiff}px)) scale(${scaleRatio})`,
        opacity: '.5',
      };
    }
    return {
      transform: `translateX(calc(${offset}% + 50vw - 50% - 4rem + ${scaleDiff}px)) scale(${scaleRatio})`,
      opacity: '.5',
    };
  }

  handleClick = index => (event) => {
    event.stopPropagation();
    this.slide(index);
  };

  handleKeyDown = (event) => {
    event.stopPropagation();

    if (event.keyCode === 39) this.slide(this.state.active + 1);
    if (event.keyCode === 37) this.slide(this.state.active - 1);
  };

  render() {
    return (
      <Gallery onClick={this.props.closePortal}>
        <ControlPrev onClick={this.handleClick(this.state.active - 1)}>
          <ArrowLeft />
        </ControlPrev>
        <ControlNext onClick={this.handleClick(this.state.active + 1)}>
          <ArrowRight />
        </ControlNext>
        <Close />
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
          {this.state.active + 1}/{this.props.images.length} {this.props.name}
        </Description>
      </Gallery>
    );
  }
}

export default Slideshow;
