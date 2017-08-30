import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Block1.css';

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

    this.state.toggled ? (this.scrollToElement(this.refs.block1Content)) : (this.scrollToElement(this.refs.block1Header));
  }
  
  scrollToElement(element) {
    ReactDOM.findDOMNode(element).scrollIntoView(true);
  }

  render() {
    const showMymInfo = this.state.toggled ? 'active' : 'inactive';
    const showIcon = this.state.toggled ? 'down' : 'up';
    let cssClasses = `${showIcon} block1__link`;

    return (
      <section ref='block1Header' className='block block1'>
        <div ref='block1Content' className='block1__content'>
          <div className='flex-row'>
            <div className='oval'>
              <div className='oval__text'>
                MYM STÅR FÖR HOPP OM LIV
              </div>
            </div>
            <div>
              <div className='block1__ingress'>
                <p className='block1__ingress-text'>Vår vision är en värld där barn har möjligheten att påverka sina egna liv och där människor arbetar gemensamt för ett hälsosamt och hållbart samhälle. MYM:s mål är att främja barns utveckling, hälsa och självständighet och därmed förbättra barns livsvillkor utifrån deras egna drömmar och mål.</p>
              </div>
              <div className={showMymInfo}>
                <p className='block1__text block1__text--small'>
                  Föreningen MYM grundades år 2011 på initiativ av Anna Lundström och några av hennes nära vänner. Idén att starta upp en förening uppstod efter att Anna bott i Tanzania under en längre period, och bygger på vår vilja att visa kärlek och medmänsklighet för andra människor. Flera av styrelsemedlemmarna har också erfarenhet av utvecklingsarbete via större aktörer som UNICEF, UNHCR och Forum Syd.
                </p>
                <p className='block1__text block1__text--small'>
                MYM står för Matumaini Ya Maisha vilket är swahili och betyder hopp om liv. Vi är en demokratisk, opolitisk och religiöst obunden förening som arbetar utifrån två internationella konventioner: FN:s konvention om mänskliga rättigheter och Barnkonventionen som lyfter fram varje barn och individs universella rättigheter.
                </p>
                <p className='block1__text block1__text--small'>
                Föreningens mål är att främja och stärka barns utveckling, hälsa och självständighet och på så vis bidra till att de kan förbättra sina livsvillkor. Detta vill vi uppnå genom att bedriva utvecklingsprojekt i nära samarbete med lokala organisationer i Tanzania. Tillsammans hoppas vi kunna bidra till en tryggare och ljusare framtid för människor i de områden där vi verkar.
                </p>
                <p className='block1__text block1__text--small'>
                Vi värdesätter samarbete på lokal nivå och tror att det är en grundförutsättning för att kunna bidra till långsiktiga och hållbara förändringar. För att uppnå detta har MYM byggt upp en lokal organisation i Tanzania som driver vår verksamhet på plats och skapar en nära relation med människor som lever i de områden där vi bedriver våra projekt. Vår utgångspunkt är att tillsammans arbeta fram lösningar utifrån lokala förutsättningar och möjligheter.
                </p>
                <p className='block1__text block1__text--small'>
                MYM i Tanzania består och drivs främst av två personer, Musiba och Castory. Det är tack vare dem som vi har skapat ett så nära och positivt samarbete lokalt. Båda är tanzanier med breda nätverk och stor kunskap om lokala förhållanden i Tanzania. De är vana föreningsmänniskor där båda varit aktiva inom olika lokala och internationella organisationer under lång tid.                </p>
                <p className='block1__text block1__text--small'>
                Vårt lokala samarbete innebär att vi mer konkret kan följa upp hur bidragen används samt kontinuerligt få uppdateringar kring våra insatser och den förändring som våra projekt bidrar till. Med erfarenhet vet vi att det är nödvändigt att arbeta mer stor flexibilitet och att ha effektiva beslutsled. Våra arbetsmetoder är byggda för att vi snabbt ska kunna anpassa våra aktiviteter vartefter projekten fortlöper så att vi kan göra mest värdefull skillnad.                </p>
              </div>
              <a className={cssClasses} onClick={(e) => {this.toggleMymInfo()}}>{ this.state.toggled ? 'VISA MINDRE' : 'VISA MER INFO' }</a>
          </div>
        </div>
      </div>
      </section>
    )
  }
}

export default Block1;
