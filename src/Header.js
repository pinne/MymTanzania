import React, { Component } from 'react';
import kids from './images/CIMG1464.png';
import Top from './Top.js';

class Header extends Component {
  render() {
    return (
      <heading>
        <Top />
        <div className='image-block'>
          <h1 className='image-block__titel left-space right-space'>GÖR EN SKILLNAD</h1>
          <p className='image-block__text'>Vi är en ideell förening som strävar efter att förbättra livet och villkoren för utsatta barn i Tanzania.</p>
        </div>
    </heading>
    )
  }
}

export default Header;
