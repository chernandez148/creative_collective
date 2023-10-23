import React from "react";
import "./styles.css";
import Hero from "./Hero/Hero";
import OurWork from "./OurWork/OurWork";

function Home({ opacity }) {
  return (
    <div className="Home">
      <Hero opacity={opacity} />
      <OurWork />
    </div>
  );
}

export default Home;
