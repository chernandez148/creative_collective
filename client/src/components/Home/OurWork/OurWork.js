import React from "react";
import website1 from "../../../assets/website-1.png";
import "./styles.css";

function OurWork() {
  const gallery = [
    { image: website1, alt: "our work 1" },
    { image: website1, alt: "our work 1" },
    { image: website1, alt: "our work 1" },
    { image: website1, alt: "our work 1" },
  ];

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
        <div className="our-work-images">
          {gallery.map((image) => (
            <img key={image.index} src={image.image} alt={image.alt} />
          ))}
        </div>
        <div className="image-carousel">
          {gallery.map((image) => (
            <img key={image.index} src={image.image} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurWork;
