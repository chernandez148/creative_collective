import React from 'react'
import christian from '../../../assets/christian.jpeg'
import juan from '../../../assets/juan.jpg'
import saki from '../../../assets/saki.jpeg'
import collin from '../../../assets/collin.jpeg'
import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import './styles.css'

function Team({ opacity }) {
    return (
        <div className={`Team ${opacity ? "opacity-0 d-none" : "opacity-1 d-initial"}`}>
            <div className='team-wrapper'>
                <div className='team-title'><h1>Websites With A Human Touch</h1></div>
                <div className='team'>
                    <div>
                        <img src={christian} />
                        <div className='info'>
                            <h4>Christian Hernandez</h4>
                            <p>Co-Founder and Web Developer</p>
                            <hr />
                            <p className='about'>I'm a web developer who combines my passion for running and love for music to create dynamic online experiences.</p>
                            <ul>
                                <li><FaLinkedinIn color='blue' /></li>
                                <li><FaGithub color='purple' /></li>
                                <li><FaBehance /></li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <img src={juan} />
                        <div className='info'>
                            <h4>Juan Chacon</h4>
                            <p>Co-Founder and Senior Graphic Designer</p>
                            <hr />
                            <p className='about'>I'm a web developer who combines my passion for running and love for music to create dynamic online experiences.</p>
                            <ul>
                                <li><FaLinkedinIn color='blue' /></li>
                                <li><FaGithub color='purple' /></li>
                                <li><FaBehance /></li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <img src={saki} />
                        <div className='info'>
                            <h4>Saki Basken</h4>
                            <p>Co-Founder and Web Developer</p>
                            <hr />
                            <p className='about'>I'm a web developer who combines my passion for running and love for music to create dynamic online experiences.</p>
                            <ul>
                                <li><FaLinkedinIn color='blue' /></li>
                                <li><FaGithub color='purple' /></li>
                                <li><FaBehance /></li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <img src={collin} />
                        <div className='info'>
                            <h4>Collin Sakuma</h4>
                            <p>Web Developer</p>
                            <hr />
                            <p className='about'>I'm a web developer who combines my passion for running and love for music to create dynamic online experiences.</p>
                            <ul>
                                <li><FaLinkedinIn color='blue' /></li>
                                <li><FaGithub color='purple' /></li>
                                <li><FaBehance /></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team