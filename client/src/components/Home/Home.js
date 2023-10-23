import React from 'react'
import './styles.css';
import Hero from './Hero/Hero';

function Home({ opacity }) {
    return (
        <div className='Home'>
            <div class={`home-wrapper ${opacity ? "opacity-0" : "opacity-1"}`}>
                <Hero />
            </div>
        </div>
    )
}

export default Home