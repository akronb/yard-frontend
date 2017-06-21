import React from 'react';
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

const Link = styled.a`
  display: inline-block;
  color: #3e4247;
  text-decoration: none;
  line-height: 1rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Wrapper>
          <a href="">
            <Logo src={logo} alt="Compass logotype" />
          </a>
          <nav>
            <Link href="">Купить</Link>
            <Link href="">Снять</Link>
            <Link href="">Наши агенты</Link>
          </nav>
        </Wrapper>
      </Grid>
    </Header>
  );
};
