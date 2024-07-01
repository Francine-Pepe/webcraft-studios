import React, { useState } from "react";
import { LanguageIcon } from "../Icons/LanguageIcon";
import { languages } from "../data";
import LanguageSwitcher from "./Props/LanguageSwitcher";
import { ArrowRight } from "../Icons/ArrowRight";
import PalleteColors from "./PalleteColors";
import { ArrowLeft } from "../Icons/ArrowLeft";
import { Pallete } from "../Icons/Pallete";

function Drawer() {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible((isVisible) => !isVisible);
  }

  return (
    <section className="drawer-container">
      <div onClick={toggle} className="drawer-icons">
        {isVisible ? <ArrowLeft /> : <ArrowRight />}
        <div className="drawer-language-content">
          <LanguageIcon />
          {isVisible && <LanguageSwitcher data={languages} />}
        </div>

        <div className="pallete-content">
          <Pallete />
          {isVisible && <PalleteColors />}
        </div>
      </div>
    </section>
  );
}

export default Drawer;
