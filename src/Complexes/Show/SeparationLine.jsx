import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

const SeparationLine = styled.hr`
  border: 0;
  margin: 1.5rem 0px 2rem;
  height: 1px;
  background-color: #e0e0e1;
`;

export default () => {
  return (
    <Grid>
      <SeparationLine />
    </Grid>
  );
};
