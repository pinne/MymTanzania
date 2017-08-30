import React, { Component } from 'react';

import './App.css';
import Header from './header/Header.js';
import Block1 from './block1/Block1.js';
import Block2 from './block2/Block2.js';
import Block3 from './block3/Block3.js';
import Block4 from './block4/Block4.js';
import Footer from './footer/Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Block1 />
        <Block2 />
        <Block3 />
        {/*<Block4 />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
