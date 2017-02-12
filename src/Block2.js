import React, { Component } from 'react';

class Block2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      togglePaymentSwish: false,
      togglePaymentMonth: false
    }

    // this.textToggleClass = this.toggleProjectInfo.bind(this);
  }

  toggleProjectInfo(showInfo) {

    if (showInfo === 'monthly'){
      this.setState({
          togglePaymentSwish: false,
          togglePaymentMonth: true
      });
    }

    if (showInfo === 'swish'){
      this.setState({
          togglePaymentSwish: true,
          togglePaymentMonth: false
      });
    }
  }

  render() {
    const swish = 'swish';
    const monthly = 'monthly';
    const swishInfo = this.state.togglePaymentSwish ? 'active' : 'inactive';
    const monthlyInfo = this.state.togglePaymentMonth ? 'active' : 'inactive';

    return (
      <section className=''>
        <div className='block block2--bg'>
          <p className='block2__text block2__titel--small'>ÄVEN SMÅ BIDARG ÄR STORA</p>
          <h2 className='block2__text bottom-space'>Hur kan du hjälpa?</h2>
          <button onClick={(e) => {this.toggleProjectInfo(swish)}} className='btn btn--primary bottom-space right-space'>Swisha en gåva</button>
          <button onClick={(e) => {this.toggleProjectInfo(monthly)}} className='btn btn--secondary'>Bli månadsgivare</button>
        </div>
        <div className={swishInfo}>
          <div className='block block2__content block2__content--first top-space'>
            <p className='block2__text'>Vi är hemskt tacksamma för alla gåvor, stora som små. Vill du ge ett bidrag? Sätt in ett valfritt belopp på bankgiro: </p>
            <h3 className='block2__text'>814-6862</h3>
            <p className='block2__text'>TACK!</p>
          </div>
        </div>
        <div className={monthlyInfo}>
          <div className='block block2__content block2__content--second top-space'>
            <p className='block2__text'>Bli medlem </p>
            <h3 className='block2__text'>Bankgiro: 814-6862</h3>
            <p className='block2__text'>TACK!</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Block2;
