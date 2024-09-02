import React, { useState } from "react";
import { ArrowLeft } from "../Icons/ArrowLeft";
import { ArrowRight } from "../Icons/ArrowRight";

function Slider(props: any) {
  const [slide, setSlide] = useState(0);
  const { data } = props;

  const next = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previous = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <div className="carousel-content">
        {data.map((item: any, i: any) => {
          return (
            <div className="image-slider-content" key={i}>
              <img
                src={item.image}
                alt={item.alt}
                className={slide === i ? "slide" : "slide-hidden"}
              />
            </div>
          );
        })}
        <div className="carousel-arrow arrow">
          <button onClick={previous}>
            <ArrowLeft />
          </button>
          <button onClick={next}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
