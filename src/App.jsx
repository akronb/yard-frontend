// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScrollToTop from './Components/ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import Complexes from './Complexes/List';
import Complex from './Complexes/Show';

export default () =>
  (<Router>
    <ScrollToTop>
      <div className="App">
        <Header />

        <Route exact path="/" component={Complexes} />
        <Route path="/complexes/:id" component={Complex} />

        <Footer />
      </div>
    </ScrollToTop>
  </Router>);
