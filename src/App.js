import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from './Header'
import Footer from './Footer'
import './Complexes.css'

import developLogoImg from './img/compass-development-logo.svg';
import offeringImg from './img/appartment-preview.jpg';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Header />
      <div className="hero">
        <Grid>
          <img className="hero__logo" src={developLogoImg} alt="Compass Development logotype" />
        </Grid>
      </div>
      <section className="catalog">
        <div className="container intro">
          <Row center="lg">
            <Col lg={8}>
              <h2 className="intro__title">Discover Our New Developments</h2>
              <p className="intro__text">Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</p>
              <button className="intro__button" type="button" name="button">Contact The Team</button>
            </Col>
          </Row>
        </div>
        <Grid>
          <a className="offering" href="">
            <img className="offering__preview" src={offeringImg} srcset="img/appartment-preview@2x.jpg 2x" alt="The Harrison" />
            <section className="offering__info">
              <p className="offering__location">SOUTH BEACH, SAN FRANCISCO</p>
              <h3 className="offering__name">The Harrison</h3>
              <p className="offering__desc">Beautifully appointed residences perched atop Rincon Hill, The Harrison offers unparalleled Bay Bridge and city views within steps of San Francisco’s greatest restaurants, shops, and The Embarcadero. </p>
            </section>
          </a>
        </Grid>
        <Grid>
          <a className="offering" href="">
            <img className="offering__preview" src={offeringImg} srcset="img/appartment-preview2@2x.jpg 2x" alt="100 East 53rd Street" />
            <section className="offering__info">
              <p className="offering__location">MIDTOWN EAST, MANHATTAN</p>
              <h3 className="offering__name">100 East 53rd Street</h3>
              <p className="offering__desc">One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned.</p>
            </section>
          </a>
        </Grid>
        <Grid>
          <a className="offering" href="">
            <img className="offering__preview" src={offeringImg} srcset="img/appartment-preview3@2x.jpg 2x" alt="152 Elizabeth" />
            <section className="offering__info">
              <p className="offering__location">NOLITA, MANHATTAN</p>
              <h3 className="offering__name">152 Elizabeth</h3>
              <p className="offering__desc">152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood.</p>
            </section>
          </a>
        </Grid>
      </section>
      <Footer />
    </div>
    );
  }
}

export default App;
