import React, { Component } from 'react';
import './Block4.css';

class Block4 extends Component {
    render() {
        return (
            <section className='block block4'>
                <div className='block4__color-box block4__color-box--light'>
                    <h3 className='block4__color-box-titel'>SEPTEMBER</h3> 
                    <p>Den 12 september kickar vi igång tävlingen med Ingenjörer utan gränser för att rita vårt kommande center i byn Hamuyebe. Tävlingen är öppen för arkitekt - och ingenjörsstudenter på Lunds Universitet.Nu kör vi!</p>
                </div> 
                <div className='block4__color-box block4__color-box--medium'>
                    <h3 className='block4__color-box-titel'>AUGUSTI</h3>
                    <p>MYM har anlitat en lantmätare som har ritat en topografisk karta över vår tomt i byn Hamuyebe. Denna karta har kombinerats med kartan som Ingenjörer utan gränsers ritade när de besökte oss, och kommer ligga till grund för ritningarna av vårt kommande center.</p>
                </div>
                <div className='block4__color-box block4__color-box--dark'>
                    <h3 className='block4__color-box-titel'>JULI</h3>
                    <p>Ingenjörer utan gränser har besökt Ukerewe och tomten i Hamuyebe där vi ska bygga upp vårt center för barnomsorg.Jätteroligt tycker vi på MYM, och tack så mycket för att ni har filmat, tagit bilder samt hjälpt oss att rita en karta över tomten.</p>
                </div>
            </section>
        )
    }
}

export default Block4;