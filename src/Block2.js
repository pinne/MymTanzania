import React, { Component } from 'react';

class Block2 extends Component {
  render() {
    return (
      <section className='block block2 block--seconday'>
        <p className='block2__titel block2__titel--small'>ÄVEN SMÅ BIDARG ÄR STORA</p>
        <h2 className='block2__titel bottom-space'>Hur kan du hjälpa?</h2>
        <button className='btn btn--primary bottom-space right-space'>Swisha en gåva</button>
        <button className='btn btn--secondary'>Bli månadsgivare</button>
      </section>
    )
  }
}

export default Block2;
