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
    const showIcon = this.state.toggled ? 'down' : 'up';
    let cssClasses = `${showIcon} block1__link`;

    return (
      <section className='block block1'>
        <div className='block1__content'>
          <div className='flex-row'>
            <div className='oval'>
              <div className='oval__text'>
                MYM STÅR FÖR HOPP OM LIV
              </div>
            </div>
            <div>
              <div className='block1__ingress'>
                <p className='block1__ingress-text'>Vårat mål är att skapa, bygga upp och driva olika utvecklingsprojekt som främjar och stärker fattiga och utsatta barn och ungdomars utveckling, utbildning, hälsa, relationer och självständighet. På så vis hoppas vi bidra till ge dem en möjlighet till en hållbar, trygg och hälsosam framtid som de själva kan påverka.</p>
              </div>
              <div className={showMymInfo}>
                <p className='block1__text block1__text--small'>
                  MYM står för Matumaini Ya Maisha vilket är swahili och betyder hopp om liv. Vi är en demokratisk, opolitisk och religiöst obunden förening som arbetar utifrån FN:s konvention om mänskliga rättigheter och Barnkonventionen, som lyfter fram varje barns och individs universella rättigheter.
                </p>
                <p className='block1__text block1__text--small'>
                  MYM bedriver utvecklingsprojekt i samarbete med lokala organisationer i Tanzania. Syftet är att främja och stärka möjligheterna för barn och ungdomar i Tanzania att förbättra sina livsvillkor. Tillsammans kan vi bidra till en mer trygg och hållbar framtid för Tanzanias barn och ungdomar.
                </p>
                <p className='block1__text block1__text--small'>
                  Föreningen MYM grundades år 2011 av Anna Lundström tillsammans med några av hennes nära vänner. Idén att starta upp en förening uppstod efter att Anna besökt Tanzania under en längre period för att utföra en examensarbete på en större organisation i landet.
                </p>
                <p className='block1__text block1__text--small'>
                  Vår vision är en värld där människor har möjligheten att påverka sina egna liv och där människor arbetar gemensamt för ett hållbart och demokratiskt samhälle att leva och utvecklas i.
                </p>
                <p className='block1__text block1__text--small'>
                  Vi värdesätter samarbete på lokal nivå och tror att det är en grundförutsättning för att det ska vara möjligt att åstadkomma en hållbar förändring och utveckling. Vi tror även att våra projekt och ambitioner är viktiga medel för att bygga broar mellan kulturer, traditioner och kunskaper. Det utbyte som sker i samarbetet tror vi kan bidra till ökad kunskap kring utvecklingsarbete och en ökad förståelse för vad medmänsklighet innebär.
                </p>
                <p className='block1__text block1__text--small'>
                  För att uppnå detta har MYM byggt upp en lokalorganisation i Tanzania som skapar en nära relation och dialog med människor som lever i de områden där vi bedriver våra projekt. Vår utgångspunkt är att tillsammans arbeta fram lösningar utifrån lokala förutsättningar i den omkringliggande miljön vad gäller såväl natur som kultur. Denna närkontakt gör det möjligt för MYM att upptäcka potential samt arbeta efter lokala behov och önskemål och således bidra till en mer hållbar förändring och utveckling med de projekt vi bedriver.
                </p>
              </div>
              <a className={cssClasses} onClick={(e) => {this.toggleMymInfo()}}>{ this.state.toggled ? 'DÖLJ INFO' : 'LÄS MER' }</a>
          </div>
        </div>
      </div>
      </section>
    )
  }
}

export default Block1;
