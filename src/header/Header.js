import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <heading>
        <div className='image-block__container'>
        <div className='image-block'>
          <div className='image-block__content'>
            <h1 className='image-block__titel left-space right-space'>GÖR SKILLNAD</h1>
            <p className='image-block__text'>Vi är en ideell förening som vill förbättra livet och villkoren för barn i Tanzania</p>
         </div>
        </div>
      </div>
    </heading>
    )
  }
}

export default Header;
