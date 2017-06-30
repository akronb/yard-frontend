// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import { getImageUrl } from '../../utils';
import Pluralizer from '../../Components/Pluralizer';

const Carousel = styled.div`
  height: 400px;
`;

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  height: 400px;
`;

const Photo = styled.img`
  max-height: 400px;
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
  images: Array<Object>,
};

export default (props: Props) =>
  (<Carousel>
    <Wrapper>
      {props.images.map(data => <Photo src={getImageUrl(data.id, 512)} key={data.id} />)}
    </Wrapper>
    <Grid>
      <Button>
        <Pluralizer
          number={props.images.length}
          one="фотография"
          few="фотографии"
          other="фотографий"
        />
      </Button>
    </Grid>
  </Carousel>);
