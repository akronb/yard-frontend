import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Preview = styled.img`
  width: 484px;
  height: 350px;
  flex-shrink: 0;
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

export default props => {
  return (
    <Card to={'/complexes/' + props.id}>
      <Preview
        src={
          process.env.PUBLIC_URL + '/img/appartment-preview' + props.id + '.jpg'
        }
        srcset={
          process.env.PUBLIC_URL +
          '/img/appartment-preview' +
          props.id +
          '@2x.jpg 2x'
        }
        alt={props.name}
      />
      <Info>
        <Location>{props.location}</Location>
        <Name>{props.name}</Name>
        <Description>{props.desc}</Description>
      </Info>
    </Card>
  );
};
