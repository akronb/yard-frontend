// @flow
import styled from 'styled-components';

import { media } from '../../utils/styles';

export default styled.h2`
  margin: 0px;
  font-family: "Philosopher", serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 27px;
  color: #3e4247;

  ${media.tablet`
    font-size: 1.5rem;
  `};
`;
