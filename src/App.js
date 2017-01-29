import React, { Component } from 'react';

import './App.css';
import './new.css';
import Header from './Header.js';
import Block1 from './Block1.js';
import Block2 from './Block2.js';
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Block1 />
        <Block2/>
        <section className='block'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae augue non massa condimentum ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse semper mi vel odio tristique, ut eleifend orci ultrices. Aliquam varius pellentesque ipsum sollicitudin hendrerit.</p>
          <button className='btn btn--primary'>Lär dig mer om MYM</button>
        </section>
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
