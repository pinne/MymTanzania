import React, { Component } from 'react';
import logo from '../../images/MYM_logo_white.svg';
import logomobil from '../../images/MYM_logo_mobile.svg';
import './Top.css';

class Top extends Component {
  render() {
    return (
      <div className='flex-row'>
        <div className='flex-row'>
          <img src={logo} className='top__logo top__logo--rest' alt="logo" />
          <img src={logomobil} className='top__logo top__logo--mobile' alt="logo" />
        </div>
      </div>
    )
  }
}

export default Top;
