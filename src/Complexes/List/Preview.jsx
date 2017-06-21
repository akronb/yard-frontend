import React from 'react';
import styled from 'styled-components';

const Preview = styled.img`
  width: 484px;
  height: 350px;
  flex-shrink: 0;
`;

export default props => {
  return (
    <Preview
      src={`${process.env.PUBLIC_URL}/img/appartment-preview${props.id}.jpg`}
      srcset={`${process.env
        .PUBLIC_URL}/img/appartment-preview${props.id}@2x.jpg 2x`}
      alt={props.name}
    />
  );
};
