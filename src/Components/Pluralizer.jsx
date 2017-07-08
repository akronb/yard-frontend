// @flow
import React from 'react';

function declOfNum(number: number, titles: Array<string>, combine: boolean) {
  const cases = [2, 0, 1, 1, 1, 2];
  const decl =
    titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];

  if (combine) return `${number} ${decl}`;

  return decl;
}

type Props = {
  number: number,
  one: string,
  few: string,
  other: string,
  combine: boolean,
};

export default (props: Props) =>
  (<span>
    {declOfNum(props.number, [props.one, props.few, props.other], props.combine)}
  </span>);
