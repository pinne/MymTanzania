import React, { Component } from 'react';

class Block1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    }

    this.toggleMymInfo = this.toggleMymInfo.bind(this);
  }

  toggleMymInfo() {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    const showMymInfo = this.state.toggled ? 'active' : 'inactive';

    return (
      <section className='block block1'>
        <div className='block1__content'>
        <div className='flex-row flex-align-center'>
            <div className='oval'>
              <div className='oval__text'>
                MYM STÅR FÖR HOPP OM LIV
              </div>
            </div>
            <div>
              <p className='block1__text'>Vårat mål är att skapa, bygga upp och driva olika utvecklingsprojekt som främjar och stärker fattiga och utsatta barn och ungdomars utveckling, utbildning, hälsa, relationer och självständighet. På så vis hoppas vi bidra till ge dem en möjlighet till en hållbar, trygg och hälsosam framtid som de själva kan påverka.</p>
            </div>
        </div>
        <div className={showMymInfo}>
          <p className='block1__text'>Vårat mål är att skapa, bygga upp och driva olika utvecklingsprojekt som främjar och stärker fattiga och utsatta barn och ungdomars utveckling, utbildning, hälsa, relationer och självständighet. På så vis hoppas vi bidra till ge dem en möjlighet till en hållbar, trygg och hälsosam framtid som de själva kan påverka.</p>
        </div>
          <a onClick={(e) => {this.toggleMymInfo()}}>{ !this.state.toggled ? 'LÄS MER' : 'DÖLJ INFO' }</a>
      </div>
      </section>
    )
  }
}

export default Block1;
