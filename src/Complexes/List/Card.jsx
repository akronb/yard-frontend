// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getImageUrl } from '../../utils';
import Image from '../../Components/Image';

const Card = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin: 3rem auto 0px;
  background: #fff;
  text-decoration: none;
  transition: .2s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, .3);
  }
  &:last-child {
    margin-bottom: 6rem;
  }
`;

const Preview = styled(Image)`
  width: 484px;
  height: 350px;
  flex-shrink: 0;
  object-fit: cover;
`;

const Info = styled.div`
  display: block;
  padding-left: 1rem;
  padding-right: 6.25rem;
  border-bottom: solid 2px #646971;
  flex-grow: 1;
`;

const Location = styled.p`
  display: block;
  font-family: monaco, Consolas, 'Lucida Console', monospace;
  text-transform: uppercase;
  color: #646971;
  margin-top: 1.5rem;
`;

const Name = styled.h3`
  display: block;
  margin: 1.5rem 0px 0px;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.5rem;
  color: #000;
`;

const Description = styled.p`
  display: block;
  margin-top: .5rem;
  line-height: 1.5rem;
  color: #3e4247;
`;

type Props = {
  id: number,
  imageId: string,
  name: string,
  location: string,
  children: Element,
};

export default (props: Props) =>
  (<Card to={`/complexes/${props.id}`}>
    <Preview
      x1={getImageUrl(props.imageId, 512)}
      x2={getImageUrl(props.imageId, 1024)}
      title={props.name}
    />
    <Info>
      <Location>{props.location}</Location>
      <Name>{props.name}</Name>
      <Description>{props.children}</Description>
    </Info>
  </Card>);
