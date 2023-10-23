import React, { useState, useEffect } from 'react'
import image1 from '../../../assets/hero-image-1.gif'
import image2 from '../../../assets/hero-image-2.jpg'
import './styles.css'

function Hero() {
    const [horizontalLine, setHorizontalLine] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setHorizontalLine(true);
        }, 3500);

    }, []);

    return (
        <div className='Hero'>
            <div className='hero-wrapper'>
                <div className='hero-left'>
                    <div className='square-center'><h6>CREATIVE COLLECTIVE</h6></div>
                    <div className='square-top-left-one'></div>
                    <div className='square-top-left-two'></div>
                    <div className='square-bottom-left-one'></div>
                    <div className='square-bottom-left-two'></div>
                    <div className='square-top-right-one'></div>
                    <div className='square-top-right-two'></div>
                    <div className='square-bottom-right-one'></div>
                    <div className='square-bottom-right-two'></div>
                </div>
                <div className='hero-right'></div>
            </div>
            <div className='horizontal-wrapper'>
                <div className={`horizontal-line ${horizontalLine ? "w-100" : "w-0"}`}></div>
            </div>

        </div>
    )
}

export default Hero

{/* <div className='title'>
                    <h2>We are a digital marketing and website design agency.</h2>
                    <p>
                        Based in sunny Southern California, dedicated to turning your online <br /> aspirations into exceptional realities.
                    </p>
                    <button>Learn More</button>
                    <h1 className='background-text-bottom'>Where your artistic vision becomes a reality.</h1>
                </div> */}