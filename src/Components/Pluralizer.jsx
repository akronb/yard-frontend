import React from 'react';

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  const decl =
    titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
  return `${number} ${decl}`;
}

export default props =>
  (<span>
    {declOfNum(props.number, [props.one, props.few, props.other])}
  </span>);
