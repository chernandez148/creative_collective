import React from "react";
import "./styles.css";
import Hero from "./Hero/Hero";
import OurWork from "./OurWork/OurWork";
import Team from "./Team/Team";
import Design from "./Design/Design";
import Services from "./Services/Services";

function Home({ opacity }) {
  return (
    <div className="Home">
      <Hero opacity={opacity} />
      <OurWork opacity={opacity} />
      <Team opacity={opacity} />
      <Design opacity={opacity} />
      <Services opacity={opacity} />
    </div>
  );
}

export default Home;
