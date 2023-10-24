import React, { useState } from 'react';
import webDesign from '../../../assets/web-design.jpg'
import './styles.css';

function Services({ opacity }) {
    const [imageIndex, setImageIndex] = useState(null)

    const services = [
        { id: 0, name: "Web Design", image: webDesign },
        { id: 1, name: "Web Design", image: webDesign },
    ]

    const retrieveIndex = (index) => {
        if (imageIndex === null) {
            setImageIndex(index)
        } else if (imageIndex === index) {
            setImageIndex(null)
        }
    }

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
                <div className='services-list'>
                    {services.map((service, index) => (
                        <div className='service-card'>
                            <button onClick={() => retrieveIndex(index)}>{service.name}</button>
                            <img className={`service-image ${imageIndex === index ? "h-100" : "h-0"}`} src={service.image} width="100%" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
