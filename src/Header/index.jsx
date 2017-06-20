import React from 'react';
import { Grid } from 'react-flexbox-grid';
import logo from '../img/compass-logo.svg';

export default () => {
  return (
    <header className="header">
      <Grid>
        <div className="header__wrapper">
          <a href="">
            <img className="header__logo" src={logo} alt="Compass logotype" />
          </a>
          <nav>
            <a className="header__link" href="">Купить</a>
            <a className="header__link" href="">Снять</a>
            <a className="header__link" href="">Наши агенты</a>
          </nav>
        </div>
      </Grid>
    </header>
  );
};
