import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='contact'>
        <div className='contact-social block'>
          <p className='contact-social__titel'>Nyfiken? Frågor? Här hittar du oss:</p>
          <div className='flex-row flex-center'>
            <a className='contact-list__link right-space' href="https://sv-se.facebook.com/mymtanzania/" target="_blank"><i></i>Instagram</a>
            <a className='contact-list__link' href="https://sv-se.facebook.com/mymtanzania/" target="_blank"><i></i>Facebook</a>
          </div>
        </div>
        <ul className='contact-list contact-list--footer'>
          <li className='contact-list__item'>© MYM Tanzania</li>
          <li className='contact-list__item'>Orgnr: 802462-3210</li>
          <li className='contact-list__item'>Bankgiro: 814-6862</li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
