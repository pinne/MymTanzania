import React, { Component } from 'react';
import './Block2.css';

class Block2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      togglePaymentSwish: false,
      togglePaymentMonth: false
    }

    this.togglePaymentInfo = this.togglePaymentInfo.bind(this);
    this.closePaymentInfo = this.closePaymentInfo.bind(this);
  }

  togglePaymentInfo(showInfo) {
    showInfo === 'swish' ?   this.setState({togglePaymentSwish: true, togglePaymentMonth: false}) : this.setState({togglePaymentSwish: false, togglePaymentMonth: true}) ;
  }

  closePaymentInfo(event) {
    event.preventDefault();
    this.setState({
      togglePaymentSwish: false,
      togglePaymentMonth: false
    });
  }

  render() {
    const swishInfo = this.state.togglePaymentSwish ? 'block2-active' : 'block2-inactive';
    const monthlyInfo = this.state.togglePaymentMonth ? 'block2-active' : 'block2-inactive';

    return (
      <section className='block block2'>
        <div className='block2--bg'>
          <p className='block2__text block2__titel--small'>SMÅ GÄRNINGAR MED MYCKET KÄRLEK</p>
          <h2 className='block2__titel bottom-space'>Hur kan du bidra?</h2>
          <button onClick={(e) => this.togglePaymentInfo('swish')} className='block2__btn btn btn--primary block2__button'>Ge en gåva</button>
          <button onClick={(e) => this.togglePaymentInfo('monthly')} className='block2__btn btn btn--secondary'>Bli medlem</button>
        </div>
        <div className={swishInfo}>
          <div className='block block2__content block2__content--first top-space'>
            <p className='block2__content-text'>Fantastiskt att du vill bidra till vårt värdefulla arbete! <br/>Du kan ge en valfri gåva till MYM på två sätt. Om du vill att bidraget ska gå till ett specifikt projekt uppge detta i meddelandefältet när du gör din betalning.</p>
            <h3 className='block2__content-titel'>Bankgiro: 814-6862</h3>
            <p className='block2__content-text'>Tack för din hjälp!</p>
            <a onClick={(e) => {this.closePaymentInfo(e)}} className=' block2__icon'><i className='material-icons'>close</i></a>
          </div>
        </div>
        <div className={monthlyInfo}>
          <div className='block block2__content block2__content--second top-space'>
            <p className='block2__content-text'>Vad roligt att du vill bli en del av MYM! <br /> Vi har gjort det enkelt för dig att bli medlem - en valfri inträdessumma, inga årliga avgifter!<br />Följ bara dessa två steg så är du en del av oss:</p>
            <ul>
              <li className='block2__content-titel'>1. Fyll i namn och e-postaddress.</li>
              <li className='block2__content-titel'>2. För över valfri summa till <br /> bankgiro 814-6862.</li>
            </ul>
            <p className='block2__content-text'>TACK och välkommen!<br /> När MYM har tagit emot din betalning och registrerat ditt medlemskap får du en bekräftelse om medlemskapet till din angivna e-postadress.</p>
            <a onClick={(e) => {this.closePaymentInfo(e)}} className=' block2__icon'><i className='material-icons'>close</i></a>
          </div>
        </div>
      </section>
    )
  }
}

export default Block2;
