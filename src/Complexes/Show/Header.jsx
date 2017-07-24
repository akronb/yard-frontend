// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import { media } from '../../utils/styles';
import type { LocationType } from '../types';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1`
  margin: 0px;
  font-family: "Philosopher", serif;
  font-weight: 700;
  font-size: 1.625rem;
  line-height: 36px;
  color: #3e4247;

  ${media.tablet`
    font-size: 2rem;
  `};
`;

const Location = styled.p`
  margin-top: .5rem;
  margin-bottom: 0px;
  font-weight: 300;
  font-size: .875rem;
  line-height: 22px;
  color: #a9afb6;
`;

const Button = styled.button`
  display: none;
  align-self: flex-start;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #e0e0e1;
  border-radius: 2px;
  color: #00779a;
  padding: .5rem 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: .625rem;
  line-height: .625rem;

  ${media.tablet`
    display: block;
  `};
`;

function formatLocation({ subLocalityName, street, postalCode }: LocationType): string {
  const address = [subLocalityName, street].filter(item => !!item).join(', ');

  if (postalCode) return `${address} • ${postalCode}`;
  return address;
}

type Props = {
  name: string,
  location: LocationType,
};

export default (props: Props) =>
  (<Grid>
    <Wrapper>
      <div>
        <Name>
          {props.name}
        </Name>
        <Location>
          {formatLocation(props.location)}
        </Location>
      </div>
      <Button>В избранное</Button>
    </Wrapper>
  </Grid>);
