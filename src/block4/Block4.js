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
                        template='<a class="instafeedTarget__link" href="{{link}}" target="_blank" id="{{id}}"><img class="instafeedTarget__image" src="{{image}}" /><div class="instafeedTarget__caption"><span class="instafeedTarget__text">{{model.short_caption}}<span></div></a>'
                        userId='5908742622'
                        clientId='ca26c24e91ee4a75855afb4b5e3f2392'
                        accessToken='5908742622.1677ed0.27ca5c5f31754aa4b1419f8f1bd468b6'/>
                </section>
                <section className='block block4'>
                    <div className='block4__color-box block4__color-box--light'>
                        <h3 className='block4__color-box-titel'>DECEMBER</h3> 
                        <p>Nu har du chansen att göra verklig skillnad för barn i Tanzania! Var med och sponsra uppbyggnaden av MYM:s center, ritat av arkitekt- och ingenjörsstudenter från Lund universitet. Ge en valfri gåva via hemsidans formulär ovan.</p>
                    </div> 
                    <div className='block4__color-box block4__color-box--medium'>
                        <h3 className='block4__color-box-titel'>NOVEMBER</h3>
                        <p>MYM har medverkat på tävlingens andra handledarmöte. Vi har fått se fantastiska idéer från de 6 lagen, samt ta del av expertis från våra fina handledar-sponsorer i Malmö: Fojab, Sydark konstruera, WSP, Tengbom, Tyréns och Structor.</p>
                    </div>
                    <div className='block4__color-box block4__color-box--dark'>
                        <h3 className='block4__color-box-titel'>OKTOBER</h3>
                        <p>Tävlingen fick ett mycket positivt gensvar från studenter och handledare. Hela 6 lag tävlar nu om att rita upp MYM:s center och tomt i Hamuyebe. Det ska bli otroligt spännande att se deras kommande ritningar!</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Block4;