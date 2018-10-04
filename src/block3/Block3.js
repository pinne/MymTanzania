import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Block3.css';

class Block3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    }

    this.toggleProjectInfo = this.toggleProjectInfo.bind(this);
  }

  toggleProjectInfo() {
    this.setState({
      toggled: !this.state.toggled
    });

    this.state.toggled ? (this.scroll(this.refs.block3Content)) : (this.scroll(this.refs.block3Header));
  }
  
  scroll(element) {
    ReactDOM.findDOMNode(element).scrollIntoView(true);
  }

  render() {

    const textToggleClass = this.state.toggled ? 'active' : 'inactive';
    const showIcon = this.state.toggled ? 'down' : 'up';
    let cssClasses = `${showIcon} block1__link`;

    return (
      <section ref='block3Content' className='block block3'>
        <div  className='block3__content'>
          <div className='block3__teaser flex-row flex-wrap'>
            <div className='block3__image-container'>
              <figure className='block3__image'></figure>
            </div>
            <div>
              <div ref='block3Header' className='block3__text-container'>
                <p className='block3__titel-text'>I FOKUS JUST NU</p>
                <h2 className='block3__titel'>PROJEKT: Center för barnomsorg</h2>
                <p className='block3__ingress'>I byn Hamuyebe, på ön Ukerewe i Victoriasjön, har utvecklingen gått sakta och enligt lokalbefolkningen finns ett stort behov av stöd till barn och föräldrar när det gäller utbildning, psykosocial utveckling och hälsovård. MYM har som mål att tillsammans med byn bygga upp och driva ett center för barnomsorg som vi hoppas kommer att bidra till en ljusare framtid för barnen och familjerna som lever här.</p>
              </div>
              <div className={textToggleClass}>
                <h4 className='block3__text block3__text--titel'>Bakgrund</h4>
                <p className='block3__text'>
                  Under 2013 köpte vår lokala organisation, MYM Tanzania, en tomt i byn Hamuyebe på ön Ukerewe i Tanzania. Totalt bor cirka 350 000 personer på Ukerewe, varav cirka 2 500–3 000 i Hamuyebe. Ön är något isolerad och går endast att nå via båt från fastlandet. Samhällsutvecklingen har därför gått sakta och människor livnär sig nästan uteslutande på jordbruk och fiske. Hamuyebe saknar både el och säkra vattenkällor, vilket innebär stora utmaningar med vattenburna sjukdomar. De har heller ingen riktig butik för mat, basvaror eller hälso- och sjukvårdsartiklar, vilket gör befolkningen extra sårbar. Det finns en grundskola i byn men inga möjligheter till arrangerad barnomsorg för varken små eller större barn. Det finns därför stora behov av att ge barn möjlighet till omsorg, lek och stöd under dagarna eller efter skolans slut.
                </p>
                <p className='block3__text'>
                  Tomten där vi planerar att bygga centret ligger cirka 20 minuters cykelväg från  öns centrala by Nansio. Den är vackert och strategiskt belägen vid Victoriasjön, bara ett par hundra meter från byns grundskola. Marken är en strandtomt på drygt 4000 kvadratmeter och är tillräckligt stor för ett par tre hus samt olika lekytor. Tanken är även att bruka en del av tomten för odling av lokala stapelvaror som exempelvis ris, majs, kassava, potatis, bönor och grönsaker.
                </p>
                <h4 className='block3__text block3__text--titel'>Lokalt driven utveckling</h4>
                <p className='block3__text'>
                  MYM har alltid värderat och varit mycket noga med att vår lokalorganisation ska vara den viktigaste aktören som driver MYMs arbete på plats. Lika viktigt har det varit att grunda detta projekt i samarbete med bybor så att dessa bygger på byns behov, kapacitet och potential. Vi anser att detta är avgörande för att projektet ska kunna implementeras väl, och för att vi ska kunna skapa förutsättningar för att göra positiv och hållbar inverkan på barns liv och utveckling.
                </p>
                <p className='block3__text'>
                  För att förankra MYMs projekt i Hamuyebe arrangerade våra lokala MYMare, Musiba och Castory, ett val våren 2016 ihop med byledningen och skolans rektor där fyra kommittéer skapades. Två kommittéer består av barn: en av barn mellan 5- och 10 år och en av barn mellan cirka 11- och 17 år, båda med handledning av vuxna. Det är viktigt att centret är anpassat för både mindre och större barn då dessa har olika behov, potential och önskemål. Kommittéerna kommer bli avgörande för att skapa ett projekt och center som barnen i byn kommer värdera och besöka. Vi har även skapat två föräldragrupper, en bestående av män och en med kvinnor. Dessa kommer att blir en stor och viktig del i att planera, implementera och driva centret. Även rektorn har visat stort intresse för projektet och vill gärna samarbeta och bli en del av centret.                  
                </p>
                <p className='block3__text'>
                  I samband med valet av kommittéer hade varje kommitté även en liten workshop där de diskuterade tankar, önskemål och förväntningar kring det planerade centret. Detta gav ett fantastiskt gensvar och det är utifrån deras diskussioner som vi har skapat det underlag som ligger till grund för vår planering av centret med tillhörande aktiviteter.
                </p>
                <h4 className='block3__text block3__text--titel'>Projektvisionen</h4>
                <p className='block3__text'>
                  Visionen med projektet är att skapa en trygg, hälsosam och stimulerande miljö där barn har möjlighet att utvecklas och påverka sina livsvillkor utifrån deras egna drömmar och mål.
                </p>
                <h4 className='block3__text block3__text--titel'>Våra fokusområden</h4>
                <p className='block3__text block3__text--italic'>
                  Förbättra och stärka barns fysiska hälsa
                </p>
                <p className='block3__text'>
                  Centret ska fokusera på hälsofrämjande aktiviteter då det finns många hälsorisker i området där bland annat näringsbrist, vattenburna sjukdomar och malaria är stora problem.                  
                </p>
                <p className='block3__text block3__text--italic'>Förbättra och stärka barns psykosociala hälsa</p>                
                <p className='block3__text'>
                  Centret ska vara en inbjudande och trygg plats där barn kan få hjälp att diskutera, bearbeta och hantera exempelvis svåra upplevelser, utmanande relationer och stormande känslor. Idag har barn i området få möjligheter till psykosocial stöd.                  
                </p>
                <p className='block3__text block3__text--italic'>Främja och stärka barns utveckling, utbildning och autonomi</p>                
                <p className='block3__text'>
                  Centret ska vara en plats för kreativitet och stimulans, både i form av formell och informell utveckling. Detta behövs eftersom det tanzaniska samhället erbjuder få möjligheter till barnomsorg. Centret kommer att vara anpassat och funktionellt för barn i olika åldrar så att både mindre barn och större ungdomar känner sig inbjudna och kan besöka och identifiera sig med centret.                  
                </p>
                <p className='block3__text block3__text--italic'>Främja aktiviteter som ger möjlighet till autonomi och självförsörjning</p>                
                <p className='block3__text'>
                  Centret strävar efter att bli självförsörjande och att kunna drivas självständigt av lokalbefolkningen. Aktiviteterna involverar allt från att generera säkert dricksvatten och sin odla egen mat, till att arrangera olika inkomstgenererande aktiviteter som kan betala centrets omkostnader.                  
                </p>
                <h4 className='block3__text block3__text--titel'>Tävling med Ingenjörer utan gränser</h4>
                <p className='block3__text'>
                  Under 2016 inledde vi i ett samarbete med Ingenjörer utan gränser (IUG) i Lund. IUG kommer att hjälpa oss med arkitekt- och konstruktionsritningar till utvecklingscentret. För att skapa dessa ritningar kommer en tävling att hållas för arkitekt- och ingenjörsstudenter på Lunds universitet. IUG har för denna tävling tillsatt en projektledare som heter Elin Schnipper, som ihop med IUG har letat sponsorer för tävlingen och som kommer att leda och koordinera genomförandet av tävlingen. De sponsrande företagen verkar inom arkitekt- och byggbranschen och de kommer förutom att sponsra tävlingen även bekosta det vinnande lagets resa ner till Hamuyebe för överlämning av projektritningarna. Företagen kommer även att agera som handledare för de tävlande studenterna vid utvalda tillfällen under tävlingens gång. De tävlande ska bilda lag med två arkitekt- och två ingenjörsstudenter. Tävlingen kommer att äga rum mellan september 2017 och februari 2018, och det vinnande laget kommer sedan att detaljplanera ritningarna och planera sin resa till Tanzania.
                </p>
                <p className='block3__text'>
                  Projektledare är arkitekten Elin Schnipper, som ihop med IUG, MYM och sponsorer kommer att leda och koordinera tävlingen. Sponsorer är WSP, Fojab, Tyréns, Sydark Konstruera, Tengbom och Structor, vilka även kommer agera som experthandledare för de tävlande studenterna under tävlingens gång. Efter finalen med slutpresentationer i februari 2018, kommer det vinnande laget att detaljplanera sina ritningar och börja planera sin resa till Hamuyebe för överlämning av projektritningarna.
                </p>
              </div>
              <button
                className={cssClasses}
                onClick={(e) => { this.toggleProjectInfo() }}>
                  {this.state.toggled ? 'VISA MINDRE' : 'MER OM PROJEKTET'}
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Block3;
