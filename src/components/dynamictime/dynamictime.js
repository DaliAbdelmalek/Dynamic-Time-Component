import React, { Component } from 'react';
import './dynamictime.css'
class Dynamictime extends Component {
    state = {}


    render() {
        let time = this.props.time
        let hrs = 0;
        let mins = 0;
        let secs = 0;

        let ms = time % 1000;
        time = (time - ms) / 1000;
        secs = time % 60;
        time = (time - secs) / 60;
        mins = time % 60;
        hrs = (time - mins) / 60;

        hrs = (hrs < 10) ? "0" + hrs : hrs;
        mins = (mins < 10) ? "0" + mins : mins;
        secs = (secs < 10) ? "0" + secs : secs;

        return (
            <div className='all'>
                <div style={{ zIndex: '2222' }} className='image'>
                    <img className='photo' src='https://financialtribune.com/sites/default/files/field/image/17january/11_mr_registry_170.png' />
                </div>
                <div className='time'>
                    <div >
                        <p>{hrs}:</p>
                        <p className='timer'>Hour</p>
                        <button>
                            Start
                        </button>
                    </div>
                    <div>
                        <p>{mins}:</p>
                        <p className='timer'>Minute</p>
                    </div>
                    <div>
                        <p>{secs}</p>
                        <p className='timer'>Second</p>
                        <button>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dynamictime;