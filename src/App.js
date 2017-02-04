import React, { Component } from 'react';

import './App.css';
import './new.css';
import Header from './Header.js';
import Block1 from './Block1.js';
import Block2 from './Block2.js';
import Block3 from './Block3.js';
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Block1 />
        <Block2 />
        <Block3 />
        <section className='block'>
          <h2>MYM bilder</h2>
          <p>Instagram</p>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
