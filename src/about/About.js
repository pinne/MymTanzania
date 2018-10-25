import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <section className='block'>
        <h2>Projekt: Ukerewe</h2>
        <p>Det projekt som MYM fokuserar främst på just nu handlar om att bygga upp ett center för barnomsorg i byn Hamuyebe på ön Ukerewe i Tanzania. Byn ligger på landsbygden och saknar både el och rinnande vatten och har ingen riktig butik för mat, basvaror eller hälsoartiklar. Tanken är att invånarna i samhället kostnadsfritt ska kunna ta del av verksamheten.</p>
        <p>Under 2013 lyckades MYM genom vår lokala organisation MYM Tanzania köpa en bit mark på cirka 4000 kvadratmeter i Hamuyebe. Tomten ligger cirka 20 min cykelväg från den centrala byn Nansio. Den är vackert och strategiskt belägen vid Victoriasjön och bara ett par hundra meter från byns grundskola. Marken är tillräckligt stor för att bygga upp både ett eller ett par hus och lekplats, samt låta bruka en del av marken för lokala stapelvaror så som exempelvis majs, kassava och olika grönsaker.</p>
        <p>Målet är att centret ska främja barns både fysiska och psykosociala hälsa. Det ska inspirera till barns utveckling där barnen kan aktivera sig, få stöd, lära sig nya saker, och skapa något att vara stolta över. Exempel på aktiviteter är till exempel läsning och läxläsning, ritning & målning, olika lekar och sporter, musik och instrument, hygien och hälsovård, samt att lära sig praktiska sysslor som att odla, bygga, dreja och sy.</p>
        <p>MYM har alltid värderat och varit mycket noga med att vår lokalorganisation ska vara den viktigaste aktören som driver MYMs arbete på plats. Lika viktigt är det att grunda våra idéer i samarbete med bybor så att dessa bygger på byns behov, kapacitet och potential. Vi anser att detta är avgörande för att projektet ska kunna implementeras väl, och för att vi ska kunna skapa förutsättningar för att göra stor, positiv och hållbar inverkan på barns liv och utveckling.</p>
        {/*<button className='btn btn--primary'>Läs mer om projektet</button>*/}
      </section>
    )
  }
}

export default About;
