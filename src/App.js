import React, { Component } from 'react';

import './App.css';
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
