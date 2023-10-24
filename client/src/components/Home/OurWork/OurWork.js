import React, { useRef, useState } from "react";
import website1 from "../../../assets/website-1.png";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import "./styles.css";

function OurWork() {
  const imageRef = useRef(null)
  const [right, setRight] = useState(0)
  console.log(imageRef)

  const gallery = [
    { image: website1, alt: "our work 1" },
    { image: website1, alt: "our work 1" },
    { image: website1, alt: "our work 1" },
    { image: website1, alt: "our work 1" },
  ];

  const handleTouchMove = () => {
    const maxRight = imageRef.current.offsetWidth * (gallery.length - 1);

    if (right !== maxRight) {
      setRight((prevRight) => prevRight + imageRef.current.offsetWidth);
    } else if (right === maxRight) {
      setRight(0)
    }
    console.log(maxRight, right)

  };



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
          <button><AiOutlineLeft /></button>
          <div
            ref={imageRef}
            className="carousel-wrapper">
            {gallery.map((image, index) => (
              <img
                style={{ right: `${right}px` }}
                key={index}
                src={image.image}
                alt={image.alt}
              />
            ))}
          </div>
          <button onClick={handleTouchMove}><AiOutlineRight /></button>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
