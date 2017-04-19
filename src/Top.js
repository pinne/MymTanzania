import React, { Component } from 'react';
import logo from './images/logo-mobil.svg';

class Top extends Component {
  render() {
    return (
      <div className='top'>
        <img src={logo} className='top__logo' alt="logo" />
      </div>
    )
  }
}

export default Top;
