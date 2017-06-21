import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Complexes from './Complexes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Complexes />
        <Footer />
      </div>
    );
  }
}

export default App;
