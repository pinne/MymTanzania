import React, { Component } from 'react';

class Block1 extends Component {
  render() {
    return (
      <section className='block block1'>
        <div className='flex-row flex-align-center block1__content'>
            <div className='oval'>
              <p className='oval__text'>
                MYM STÅR FÖR HOPP OM LIV
              </p>
            </div>
            <div className='align-left '>Vårat mål är att skapa, bygga upp och driva olika utvecklingsprojekt som främjar och stärker fattiga och utsatta barn och ungdomars utveckling, utbildning, hälsa, relationer och självständighet. På så vis hoppas vi bidra till ge dem en möjlighet till en hållbar, trygg och hälsosam framtid som de själva kan påverka.</div>
        </div>
      </section>
    )
  }
}

export default Block1;
