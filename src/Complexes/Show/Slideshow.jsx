// @flow
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { getImageUrl } from '../../utils/images';
import { media } from '../../utils/styles';

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
  max-width: 100vw;
  height: 100%;
  ${media.desktop`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    height: auto;
  `};
`;

const Slide = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  will-change: transform, opacity;
  transition: .2s linear;
  transform-origin: center bottom 0px;
  ${media.desktop`
    height: auto;
    max-height: 100vh;
    max-width: 100vw;
    visibility: hidden;
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
  state: { active: number } = { active: this.props.active };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  slide = (index: number) => {
    const imagesNum = this.props.images.length;

    if (index < 0) this.setState({ active: imagesNum - 1 });
    else if (index >= imagesNum) this.setState({ active: 0 });
    else this.setState({ active: index });
  };

  changeSlide(index: number) {
    const offset = this.state.active * -100;
    const scaleRatio = 0.8;

    if (index === this.state.active) {
      return {
        transform: `translateX(calc(${offset}% + 50vw - 50%))`,
        visibility: 'visible',
      };
    }
    return {
      transform: `translateX(calc(${offset}% + 50vw - 50%)) scale(${scaleRatio})`,
      opacity: '.5',
    };
  }

  handleClick = (index: number) => (event: Event) => {
    event.stopPropagation();
    this.slide(index);
  };

  handleKeyDown = (event: Event) => {
    event.stopPropagation();

    if (event.keyCode === 39) this.slide(this.state.active + 1);
    if (event.keyCode === 37) this.slide(this.state.active - 1);
  };

  render() {
    return (
      <Gallery onClick={this.props.closePortal}>
        <Helmet>
          <body className="is-slideshow" />
        </Helmet>
        <ControlPrev onClick={this.handleClick(this.state.active - 1)}>
          <ArrowLeft />
        </ControlPrev>
        <ControlNext onClick={this.handleClick(this.state.active + 1)}>
          <ArrowRight />
        </ControlNext>
        <Close />
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
          {this.state.active + 1}/{this.props.images.length} {this.props.name}
        </Description>
      </Gallery>
    );
  }
}

export default Slideshow;
