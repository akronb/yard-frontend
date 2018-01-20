// @flow
import styled from 'styled-components';

import { media } from '../../utils/styles';

export default styled.hr`
  border: 0;
  height: 1px;
  margin: .825rem 0px 2rem;
  background-color: #e0e0e1;

  ${media.tablet`
    margin: 1.5rem 0px 2rem;
  `};
`;
