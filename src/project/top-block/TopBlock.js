import React, { Component } from 'react';
import './TopBlock.css';

class TopBlock extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <heading>
        <div className='top-block'>
        <div className='top-block__image'>
          <div className='top-block__content'>
            <h1 className='top-block__titel'>Center för barnomsorg</h1>
            <p className='top-block__text'>I byn Hamuyebe nära Victoriasjön jobbar MYM tillsammans med lokalbefolkningen för att skapa bättre förutsättningar för framtiden.</p>
          </div>
        </div>
      </div>
    </heading>
    )
  }
}

export default TopBlock;
