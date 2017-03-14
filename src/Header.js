import React, { Component } from 'react';
import Top from './Top.js';

class Header extends Component {
  render() {
    return (
      <heading>
        <div className='image-block__container'>
        <div className='image-block'>
          <Top />
          <div className='image-block__content'>
            <h1 className='image-block__titel left-space right-space'>GÖR EN SKILLNAD</h1>
            <p className='image-block__text'>Vi är en ideell förening som strävar efter att förbättra livet och villkoren för utsatta barn i Tanzania.</p>
         </div>
        </div>
      </div>
    </heading>
    )
  }
}

export default Header;
