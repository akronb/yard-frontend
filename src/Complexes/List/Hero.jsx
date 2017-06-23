import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import developLogoImg from '../../img/compass-development-logo.svg';

const Wrapper = styled.div`
  background-color: #161616;
`;

const Logo = styled.img`
  display: block;
  margin: 0px auto;
  padding: 5rem 0px;
  width: 419px;
  height: 131px;
`;

export default () => {
  return (
    <Wrapper>
      <Grid>
        <Logo src={developLogoImg} alt="Compass Development logotype" />
      </Grid>
    </Wrapper>
  );
};