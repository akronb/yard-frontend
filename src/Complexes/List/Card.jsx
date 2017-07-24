// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getImageUrl } from '../../utils/images';
import { media } from '../../utils/styles';
import Image from '../../Components/Image';

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  text-decoration: none;
  transition: .2s ease-in-out;
  margin: 2rem 1rem 0px;

  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, .3);
  }

  &:last-child {
    margin-bottom: 4rem;
  }

  ${media.tablet`
    flex-direction: row;
    margin: 3rem auto 0px;
    &:last-child {
      margin-bottom: 6rem;
    }
  `};
`;

const Preview = styled(Image)`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  object-fit: cover;

  ${media.giant`
    width: 484px;
  `};

  ${media.tablet`
    width: 45%;
    height: 350px;
  `};
`;

const Info = styled.div`
  display: block;
  padding: 0px 1rem 1.5rem;
  border-bottom: solid 2px #646971;
  flex-grow: 1;

  ${media.giant`
    padding-left: 1rem;
    padding-right: 6.25rem;
  `};

  ${media.tablet`
    padding-right: 3rem;
  `};
`;

const Location = styled.p`
  display: block;
  font-family: monaco, Consolas, 'Lucida Console', monospace;
  text-transform: uppercase;
  color: #646971;
  margin: 1rem 0px 0px;

  ${media.tablet`
    margin-top: 1.5rem;
  `};
`;

const Name = styled.h3`
  display: block;
  margin: 1.5rem 0px 0px;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.25;
  color: #000;

  ${media.tablet`
    font-size: 2.5rem;
    line-height: 3.5rem;
  `};
`;

const Description = styled.p`
  display: block;
  margin: 1rem 0px 0px;
  line-height: 1.5rem;
  color: #3e4247;

  ${media.tablet`
    margin-top: .5rem;
  `};
`;

type Props = {
  id: string,
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
      <Location>
        {props.location}
      </Location>
      <Name>
        {props.name}
      </Name>
      <Description>
        {props.children}
      </Description>
    </Info>
  </Card>);
