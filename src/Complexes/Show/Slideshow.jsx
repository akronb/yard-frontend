import React from 'react';
import styled from 'styled-components';

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
  display: flex;
  overflow: hidden;
`;

const Slide = styled.img`
  flex-shrink: 0;
  width: 512px;
  height: 512px;
  margin-right: 4rem;
`;

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 1,
    };
  }

  slide(i) {
    this.setState({ activeItem: i });
  }

  translate(i) {
    return { transform: `translateX(${(i - this.state.activeItem) * 100}%)` };
  }

  handleClick = e => console.log('It works!');

  render() {
    return (
      <Gallery onClick={this.props.closePortal}>
        {this.props.images.map((image, i) =>
          (<Slide
            // onClick={this.slide(i)}
            // style={this.translate(i)}
            onClick={this.handleClick}
            src={getImageUrl(image.id, 1024)}
            key={image.id}
            alt={this.props.name}
          />),
        )}
      </Gallery>
    );
  }
}

export default Slideshow;
