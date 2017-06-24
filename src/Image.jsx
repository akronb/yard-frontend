import React from 'react';

export default props =>
  (<img
    src={`${process.env.PUBLIC_URL}/img/${props.x1}`}
    srcSet={`${process.env.PUBLIC_URL}/img/${props.x2} 2x`}
    alt={props.title}
    title={props.title}
    {...props}
  />);
