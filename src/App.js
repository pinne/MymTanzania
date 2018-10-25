import React, { Component } from 'react';

import './App.css';
import Top from './header/top/Top.js';
import Footer from './footer/Footer.js';
import PageRoute from './pageroute.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageRoute />
        <Footer />
      </div>
    );
  }
}

export default App;
