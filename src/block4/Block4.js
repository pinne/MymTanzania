import React, { Component } from 'react';
import Instafeed from 'react-instafeed';
import './Block4.css';

class Block4 extends Component {
    shouldComponentUpdate() {
        return false;
    }

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
            </div>
        )
    }
}

export default Block4;