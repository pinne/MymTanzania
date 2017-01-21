import React, { Component } from 'react';
import Top from './Top.js';

class Header extends Component {
  render() {
    return (
      <heading>
        <Top />
        <div className='image-block'>
          {/*<h1 className='image-block__titel left-space right-space'>GÖR EN SKILLNAD</h1>
          <p className='image-block__text'>Vi är en ideell förening som strävar efter att förbättra livet och villkoren för utsatta barn i Tanzania.</p>*/}
        </div>
        <div className='block block--primary'>
          <h1>MYM står för hopp om liv</h1>
          <p>MYM står för Matumaini Ya Maisha vilket är swahili och betyder hopp om liv. Vi är en demokratisk, opolitisk och religiöst obunden förening som arbetar utifrån FN:s konvention om mänskliga rättigheter och Barnkonventionen, som lyfter fram varje barns och individs universella rättigheter.</p>
          <p>MYM bedriver utvecklingsprojekt i samarbete med lokala organisationer i Tanzania. Syftet är att främja och stärka möjligheterna för barn och ungdomar i Tanzania att förbättra sina livsvillkor. Tillsammans kan vi bidra till en mer trygg och hållbar framtid för Tanzanias barn och ungdomar.</p>
          <p>Föreningen MYM grundades år 2011 av Anna Lundström tillsammans med några av hennes nära vänner. Idén att starta upp en förening uppstod efter att Anna besökt Tanzania under en längre period för att utföra en examensarbete på en större organisation i landet.</p>
          <p>Föreningens mål är att förbättra livet och villkoren för utsatta, föräldra- och hemlösa barn i Tanzania. Detta vill vi uppnå genom att skapa, bygga upp och driva olika utvecklingsprojekt som främjar och stärker barn och ungdomars utveckling, utbildning, hälsa, relationer och självständighet, så att barnen har möjlighet till en hållbar, trygg, och hälsosam framtid som de själva kan påverka.</p>
          <p>Vår vision är en värld där människor har möjligheten att påverka sina egna liv och där människor arbetar gemensamt för ett hållbart och demokratiskt samhälle att leva och utvecklas i.</p>
          <p>Vi värdesätter samarbete på lokal nivå och tror att det är en grundförutsättning för att det ska vara möjligt att åstadkomma en hållbar förändring och utveckling. Vi tror även att våra projekt och ambitioner är viktiga medel för att bygga broar mellan kulturer, traditioner och kunskaper. Det utbyte som sker i samarbetet tror vi kan bidra till ökad kunskap kring utvecklingsarbete och en ökad förståelse för vad medmänsklighet innebär.</p>
          <p>För att uppnå detta har MYM byggt upp en lokalorganisation i Tanzania som skapar en nära relation och dialog med människor som lever i de områden där vi bedriver våra projekt. Vår utgångspunkt är att tillsammans arbeta fram lösningar utifrån lokala förutsättningar i den omkringliggande miljön vad gäller såväl natur som kultur. Denna närkontakt gör det möjligt för MYM att upptäcka potential samt arbeta efter lokala behov och önskemål och således bidra till en mer hållbar förändring och utveckling med de projekt vi bedriver.</p>
      </div>
    </heading>
    )
  }
}

export default Header;
