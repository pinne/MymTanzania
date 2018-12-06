import React, { Component } from 'react';
import Block1 from '../block1/Block1.js';
import Block2 from '../block2/Block2.js';
import Block3 from '../block3/Block3.js';
import instagram from '../instagram/instagram.js';
import Header from '../header/Header.js';

class Start extends Component {
  render() {
    return (
      <div>
        <Header />
        <Block1 />
        <Block2 />
        <Block3 />
        <instagram />
      </div>
    );
  }
}

export default Start;
