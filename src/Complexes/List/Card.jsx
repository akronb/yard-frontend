// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getImageUrl } from '../../utils/images';
import { media } from '../../utils/styles';
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
  ${media.tablet`
    flex-direction: column;
    margin: 2rem 1rem 0px;
    &:last-child {
      margin-bottom: 4rem;
    }
  `};
`;

const Preview = styled(Image)`
  width: 484px;
  height: 350px;
  flex-shrink: 0;
  object-fit: cover;
  ${media.giant`
    width: 45%;
  `};
  ${media.tablet`
    width: 100%;
    height: auto;
  `};
`;

const Info = styled.div`
  display: block;
  padding-left: 1rem;
  padding-right: 6.25rem;
  border-bottom: solid 2px #646971;
  flex-grow: 1;
  ${media.giant`
    padding-right: 3rem;
  `};
  ${media.tablet`
    padding: 0px 1rem 1.5rem;
  `};
`;

const Location = styled.p`
  display: block;
  font-family: monaco, Consolas, 'Lucida Console', monospace;
  text-transform: uppercase;
  color: #646971;
  margin: 1.5rem 0px 0px;
  ${media.tablet`
    margin-top: 1rem;
  `};
`;

const Name = styled.h3`
  display: block;
  margin: 1.5rem 0px 0px;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.5rem;
  color: #000;
  ${media.tablet`
    font-size: 2rem;
    line-height: 1.25;
  `};
`;

const Description = styled.p`
  display: block;
  margin: .5rem 0px 0px;
  line-height: 1.5rem;
  color: #3e4247;
  ${media.tablet`
    margin: 1rem 0px 0px;
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
