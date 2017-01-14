import React, { Component } from 'react';
import kids from './images/CIMG1464.png';

class Header extends Component {
  render() {
    return (
      <heading className='block block--heading'>
        <img src={kids} className="block__image" alt="logo" />
        <h1>Vi är en demokratisk, ...</h1>
      </heading>
    )
  }
}

export default Header;