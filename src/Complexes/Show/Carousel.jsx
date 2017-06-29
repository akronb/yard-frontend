import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import { getImageUrl } from '../../utils';

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

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  const decl =
    titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
  return `${number} ${decl}`;
}

export default props =>
  (<Carousel>
    <Wrapper>
      {props.imageList.map(data => <Photo src={getImageUrl(data.id, 512)} key={data.id} />)}
    </Wrapper>
    <Grid>
      <Button>
        {declOfNum(props.imageList.length, ['фотография', 'фотографии', 'фотографий'])}
      </Button>
    </Grid>
  </Carousel>);
