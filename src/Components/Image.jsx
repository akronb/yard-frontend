// @flow
import React from 'react';

type Props = {
  x1: string,
  x2: string,
  title: string,
};

export default (props: Props) =>
  <img src={props.x1} srcSet={`${props.x2} 2x`} alt={props.title} title={props.title} {...props} />;
