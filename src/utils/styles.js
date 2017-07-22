/* eslint import/prefer-default-export: 0 */
/* eslint no-param-reassign: 0*/
// @flow
import { css } from 'styled-components';

export const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 496,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
