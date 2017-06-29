import React from 'react';

export default props =>
  <img src={props.x1} srcSet={`${props.x2} 2x`} alt={props.title} title={props.title} {...props} />;
