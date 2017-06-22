import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

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

export default () => {
  return (
    <Carousel>
      <Wrapper>
        <Photo src={`${process.env.PUBLIC_URL}/img/slider-1.png`} />
        <Photo src={`${process.env.PUBLIC_URL}/img/slider-2.png`} />
        <Photo src={`${process.env.PUBLIC_URL}/img/slider-3.png`} />
        <Photo src={`${process.env.PUBLIC_URL}/img/slider-4.png`} />
        <Photo src={`${process.env.PUBLIC_URL}/img/slider-5.png`} />
      </Wrapper>
      <Grid>
        <Button>41 фотография</Button>
      </Grid>
    </Carousel>
  );
};
