import React, { Component } from 'react';

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

  closePaymentInfo() {
    event.preventDefault();
    this.setState({
      togglePaymentSwish: false,
      togglePaymentMonth: false
    });
  }

  render() {
    const swishInfo = this.state.togglePaymentSwish ? 'active' : 'inactive';
    const monthlyInfo = this.state.togglePaymentMonth ? 'active' : 'inactive';

    return (
      <section className=''>
        <div className='block block2--bg'>
          <p className='block2__text block2__titel--small'>ÄVEN SMÅ BIDARG ÄR STORA</p>
          <h2 className='block2__text bottom-space'>Hur kan du hjälpa?</h2>
          <button onClick={(e) => this.togglePaymentInfo('swish')} className='block2__btn btn btn--primary block2__buttin'>Swisha en gåva</button>
          <button onClick={(e) => this.togglePaymentInfo('monthly')} className='block2__btn btn btn--secondary'>Bli månadsgivare</button>
        </div>
        <div className={swishInfo}>
          <div className='block block2__content block2__content--first top-space'>
            <p className='block2__text'>Swisha en gåva</p>
            <h3 className='block2__text'>070X-XXX-XXX</h3>
            <p className='block2__text'>TACK!</p>
            <a onClick={(e) => {this.closePaymentInfo()}} className=' block2__icon'><i className='material-icons'>close</i></a>
          </div>
        </div>
        <div className={monthlyInfo}>
          <div className='block block2__content block2__content--second top-space'>
            <p className='block2__text'>Vi är hemskt tacksamma för alla gåvor, stora som små. Vill du ge ett bidrag? Sätt in ett valfritt belopp på bankgiro:</p>
            <h3 className='block2__text'>814-6862</h3>
            <p className='block2__text'>TACK!</p>
            <a onClick={(e) => {this.closePaymentInfo()}} className=' block2__icon'><i className='material-icons'>close</i></a>
          </div>
        </div>
      </section>
    )
  }
}

export default Block2;
