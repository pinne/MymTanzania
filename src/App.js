import React, { Component } from 'react';

import './App.css';
import './style.css';
import Header from './Header.js';
import Block1 from './Block1.js';
import Block2 from './block2/Block2.js';
import Block3 from './Block3.js';
import Block4 from './Block4.js';
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Footer />
      </div>
    );
  }
}

export default App;
