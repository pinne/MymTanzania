import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='contact'>
          <ul className='contact-list contact-list--footer'>
            <li className='contact-list__item'>Orgnr: 802462-3210</li>
            <li className='contact-list__item'>Bankgiro: 814-6862</li>
            <li className='contact-list__item'><a className='contact-list__link' href="https://sv-se.facebook.com/mymtanzania/" target="_blank">MYM på Facebook</a></li>
          </ul>
      </footer>
    )
  }
}

export default Footer;
