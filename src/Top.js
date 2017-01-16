import React, { Component } from 'react';
import logo from './images/logo-new.png';

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
