import React, { Component } from 'react';
import Instafeed from 'react-instafeed';
import './Block4.css';

class Block4 extends Component {
    render() {
        const instafeedTarget = 'instafeed';        
        return (
            <div>
                <section id={instafeedTarget} className='block block4'>
                    <Instafeed
                        limit='5'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-recent'
                        target={instafeedTarget}
                        template='<a class="instafeedTarget__link" href="{{link}}" target="_blank" id="{{id}}"><img class="instafeedTarget__image" src="{{image}}" /><span class="instafeedTarget__caption">{{model.short_caption}}</span></a>'
                        userId='5908742622'
                        clientId='ca26c24e91ee4a75855afb4b5e3f2392'
                        accessToken='5908742622.1677ed0.27ca5c5f31754aa4b1419f8f1bd468b6'/>
                </section>
                <section className='block block4'>
                    <div className='block4__color-box block4__color-box--light'>
                        <h3 className='block4__color-box-titel'>SEPTEMBER</h3> 
                        <p>Den 12 september kickar vi igång tävlingen med Ingenjörer utan gränser för att rita vårt kommande center i byn Hamuyebe. Tävlingen är öppen för arkitekt - och ingenjörsstudenter på Lunds Universitet. Nu kör vi!</p>
                    </div> 
                    <div className='block4__color-box block4__color-box--medium'>
                        <h3 className='block4__color-box-titel'>AUGUSTI</h3>
                        <p>MYM har anlitat en lantmätare som har ritat en topografisk karta över vår tomt i byn Hamuyebe. Denna karta har kombinerats med kartan som Ingenjörer utan gränsers ritade när de besökte oss, och kommer ligga till grund för ritningarna av vårt kommande center.</p>
                    </div>
                    <div className='block4__color-box block4__color-box--dark'>
                        <h3 className='block4__color-box-titel'>JULI</h3>
                        <p>Ingenjörer utan gränser har besökt Ukerewe och tomten i Hamuyebe där vi ska bygga upp vårt center för barnomsorg. Jätteroligt tycker vi på MYM, och tack så mycket för att ni har filmat, tagit bilder samt hjälpt oss att rita en karta över tomten.</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Block4;