import React, { useState, useEffect } from "react";
import "./styles.css";

function Hero({ opacity }) {
  const [verticalLine, setVerticalLine] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVerticalLine(true);
    }, 3500);
  }, []);

  return (
    <div className="Hero">
      <div className={`hero-wrapper ${opacity ? "opacity-0" : "opacity-1"}`}>
        <div className="hero-top">
          <div className="squares-wrapper">
            <div className="square-left-top"></div>
            <div className="square-left-center"></div>
            <div className="square-left-bottom"></div>
            <div className="square-center-bottom"></div>
          </div>
          <div className="square-center">
            <h6>QUIRK & QUILL STUDIOS</h6>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="title">
            <h2>We are a digital marketing and website design agency.</h2>
            <p>
              Based in sunny Southern California, dedicated to turning your
              online aspirations into exceptional realities.
            </p>
          </div>
        </div>
        {/* <h1 className="background-text">
          Where your artistic vision becomes a reality.
        </h1> */}
      </div>
      <div className="vertical-wrapper">
        <div
          className={`vertical-line ${verticalLine ? "h-100" : "h-0"}`}
        ></div>
      </div>
    </div>
  );
}

export default Hero;
