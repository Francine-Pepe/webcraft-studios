import React, { useState } from "react";
import { ArrowRight } from "../Icons/ArrowRight";
import PalleteColors from "./PalleteColors";
import { ArrowLeft } from "../Icons/ArrowLeft";
import { Pallete } from "../Icons/Pallete";

function Drawer() {
  const [isVisible, setIsVisible] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  function toggle() {
    setIsVisible((isVisible) => !isVisible);
  }

  const toggleColor = () => {
    if (isVisible) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  window.addEventListener("click", toggleColor);

  return (
    <section
      className={
        changeColor ? "drawer-container colorChange" : "drawer-container"
      }
    >
      <div
        onClick={() => {
          toggle();
          toggleColor();
        }}
        className="drawer-icons"
      >
        <div className="pallete-content">{isVisible && <PalleteColors />}</div>
        <div className="pallete">
          <Pallete />
        </div>
      </div>
    </section>
  );
}

export default Drawer;
