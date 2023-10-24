import React from 'react'
import './styles.css'

function Design({ opacity }) {
    return (
        <div className={`Design ${opacity ? "opacity-0 d-none" : "opacity-1 d-initial"}`}>
            <div className={`design-wrapper ${opacity ? "opacity-0 d-none" : "opacity-1 d-initial"}`}>
                <div className='design-title'>
                    <h1>
                        Designing with Your Vision in Mind
                    </h1>
                    <p>
                        At 'Creative Collective,' we turn your concepts into stunning designs that resonate with your audience. Our team blends creativity and functionality to create meaningful, impactful visuals that meet your goals.
                    </p>
                    <span>(Juan's designs here)</span>
                </div>
            </div>
        </div>
    )
}

export default Design