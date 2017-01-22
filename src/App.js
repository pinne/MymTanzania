import React, { Component } from 'react';

import './App.css';
import './new.css';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className='block'>
          <h2>Även små bidrag är stora. Hur kan du hjälpa?</h2>
          <button className='btn btn--primary bottom-space right-space'>Swisha en gåva</button>
          <button className='btn btn--secondary'>Bli månadsgivare</button>
        </section>
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
