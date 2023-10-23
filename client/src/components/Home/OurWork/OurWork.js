import React from "react";
import website1 from "../../../assets/website-1.png";
import "./styles.css";

function OurWork() {
  return (
    <div className="OurWork">
      <div className="our-work-wrapper">
        <div className="our-work-title">
          <h1>
            Putting People First: Our Unique Approach to Digital Marketing
          </h1>
          <p>
            In our approach to digital marketing, we prioritize understanding
            people's genuine needs and desires. While many digital marketing
            agencies may lose sight of this focus, we stay committed to
            delivering what people truly want in every online interaction.
          </p>
        </div>

        <img src={website1} />
      </div>
    </div>
  );
}

export default OurWork;
