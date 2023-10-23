import React, { useState, useEffect } from 'react'
import image1 from '../../../assets/hero-image-1.gif'
import image2 from '../../../assets/hero-image-2.jpg'
import bg from '../../../assets/riverside-bg.jpg'
import './styles.css'

function Hero() {
    const [verticalLine, setVerticalLine] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setVerticalLine(true);
        }, 3500);

    }, []);

    return (
        <div className='Hero'>
            <div className='hero-wrapper'>
                <div className='hero-left'>
                    <div className='square-center'><h6>CREATIVE COLLECTIVE</h6></div>
                    <div className='square-left-top'></div>
                    <div className='square-left-center'></div>
                    <div className='square-left-bottom'></div>
                </div>
                <div className='hero-right'>
                    <div className='title'>
                        <h2>We are a digital marketing and website design agency.</h2>
                        <p>
                            Based in sunny Southern California, dedicated to turning your online aspirations into exceptional realities.
                        </p>
                        <h1 className='background-text-bottom'>Where your artistic vision becomes a reality.</h1>
                    </div>
                </div>
            </div>
            <div className='vertical-wrapper'>
                <div className={`vertical-line ${verticalLine ? "h-100" : "h-0"}`}></div>
            </div>

        </div>
    )
}

export default Hero

