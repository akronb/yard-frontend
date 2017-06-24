import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import logo from '../img/compass-logo.svg';

const Header = styled.header`
  background: #fff;
  border: 1px solid #eaebf0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  margin: 1.25rem 0px;
  width: 179px;
  height: 24px;
`;

const MenuLink = styled(Link)`
  display: inline-block;
  color: #3e4247;
  text-decoration: none;
  line-height: 1rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export default () => (
  <Header>
    <Grid>
      <Wrapper>
        <Link to="/">
          <Logo src={logo} alt="Compass logotype" />
        </Link>
        <nav>
          <MenuLink to="#">Купить</MenuLink>
          <MenuLink to="#">Снять</MenuLink>
          <MenuLink to="#">Наши агенты</MenuLink>
        </nav>
      </Wrapper>
    </Grid>
  </Header>
  );
