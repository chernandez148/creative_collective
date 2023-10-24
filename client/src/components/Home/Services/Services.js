import React, { useState } from 'react';
import './styles.css';
function Services({ opacity }) {



    return (
        <div className={`Services ${opacity ? "opacity-0 d-none" : "opacity-1 d-initial"}`}>
            <div className={`services-wrapper ${opacity ? "opacity-0 d-none" : "opacity-1 d-initial"}`}>
                <div className='services-title'>
                    <h1>
                        Our Services
                    </h1>
                    <p>
                        Our services span a wide spectrum of digital needs. From web design that captivates, SEO optimization that ranks, to digital marketing that engages, and design that wows. We're your all-in-one solution for digital success
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
