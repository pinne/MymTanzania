import React, { Component } from 'react';

class Block3 extends Component {
  render() {
    return (
      <section className='block block3 flex-row'>
        <div>
          <p>HÄR FOKUSERAR VI EXTRA JUST NU</p>
          <h2>Projekt: Ukerewe</h2>
          <p>I byn Hamuyebe på ön Ukerewe i Tanzania växer många idag upp med begränsad möjligheter till utbildning och tillgång till hälsovård. MYM planerar här bygga upp och driva ett utvecklingscenter som vi hoppas kan bidra till en bättre och hållbar framtid för många av barnen som lever här.</p>
          <a href='#'>Läs mer</a>
        </div>
        <div className='flex-align-self-center'>
          <figure className='block3__image'></figure>
        </div>
      </section>
    )
  }
}

export default Block3;
