import React, { Component } from 'react';
import './Column.css';


class Column extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='block column'>
        <div className='column__container'>
          <h2 className='column__header'>Fokusområden</h2>
          <div className='flex-row'>
            <div>
              <h3 className='column__color-box-titel'>Lorem ipsum</h3>
              <p>Lorem ipsum</p>
            </div>
            <div>
              <h3 className='column__color-box-titel'>Lorem ipsum</h3>
              <p>Lorem ipsum</p>
            </div>
            <div>
              <h3 className='column__color-box-titel'>Lorem ipsum</h3>
              <p>Lorem ipsum</p>
            </div>
            <div>
              <h3 className='column__color-box-titel'>Lorem ipsum</h3>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Column;
