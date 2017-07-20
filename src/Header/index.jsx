// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import { media } from '../style-utils';
import logo from '../img/compass-logo.svg';

const Header = styled.header`
  background: #fff;
  border: 1px solid #eaebf0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.tablet`
    padding: 0px 1rem;
  `};
`;

const Logo = styled.img`
  display: block;
  margin: 1.25rem 0px;
  width: 179px;
  height: 24px;
  ${media.tablet`
    height: 16px;
    width: 119px;
    margin: 1rem 0px;
  `};
`;

const Menu = styled.nav`
  ${media.phone`
    display: none;
  `};
`;

const MenuLink = styled(Link)`
  display: inline-block;
  color: #3e4247;
  text-decoration: none;
  line-height: 1rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  ${media.tablet`
    font-size: .825rem;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  `};
`;

export default () =>
  (<Header>
    <Grid>
      <Wrapper>
        <Link to="/">
          <Logo src={logo} alt="Compass logotype" />
        </Link>
        <Menu>
          <MenuLink to="#">Купить</MenuLink>
          <MenuLink to="#">Снять</MenuLink>
          <MenuLink to="#">Наши агенты</MenuLink>
        </Menu>
      </Wrapper>
    </Grid>
  </Header>);
