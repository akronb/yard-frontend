import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
  margin: 0px;
  font-family: "Philosopher", serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 27px;
  color: #3e4247;
`;

export default props => {
  return <Heading {...props}>{props.children}</Heading>;
};
