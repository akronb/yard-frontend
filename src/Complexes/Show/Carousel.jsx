// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Portal from 'react-portal';

import type { ImagesType } from '../types';
import { getImageUrl } from '../../utils/images';
import Slideshow from './Slideshow';
import Pluralizer from '../../Components/Pluralizer';

const Carousel = styled.div`height: 400px;`;

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

type Props = {
  name: string,
  images: Array<ImagesType>,
};

export default (props: Props) => {
  const ModalButton = (
    <Button>
      <Pluralizer
        number={props.images.length}
        one="фотография"
        few="фотографии"
        other="фотографий"
        combine
      />
    </Button>
  );

  return (
    <Carousel>
      <Wrapper>
        {props.images.map((image, index) =>
          (<Portal
            closeOnEsc
            openByClickOn={
              <Photo src={getImageUrl(image.id, 512)} key={image.id} alt={props.name} />
            }
            key={image.id}
          >
            <Slideshow images={props.images} name={props.name} activeSlide={index} />
          </Portal>),
        )}
      </Wrapper>
      <Grid>
        <Portal closeOnEsc openByClickOn={ModalButton}>
          <Slideshow images={props.images} name={props.name} />
        </Portal>
      </Grid>
    </Carousel>
  );
};
