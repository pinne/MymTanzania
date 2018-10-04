import React, { Component } from 'react';
import './Block2.css';
import Membership from './Membership.js'

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
            <p className='block2__content-text'>Fantastiskt att du vill bidra till vårt värdefulla arbete! <br/>Om du vill att bidraget ska gå till ett specifikt projekt uppge detta i meddelandefältet när du gör din betalning.</p>
            <h3 className='block2__content-titel'>Swish: 1233 508 116</h3>
            <h3 className='block2__content-titel'>Bankgiro: 814-6862</h3>
            <p className='block2__content-text'>Tack för din hjälp!</p>
            <button
              onClick={(e) => {this.closePaymentInfo(e)}}
              className='block2__icon'><i className='material-icons'>close</i>
            </button>
          </div>
        </div>
        <div className={monthlyInfo}>
          <div className='block block2__content block2__content--second top-space'>
            <Membership />
            <button
              onClick={(e) => {this.closePaymentInfo(e)}}
              className='block2__icon'><i className='material-icons'>close</i>
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default Block2;
