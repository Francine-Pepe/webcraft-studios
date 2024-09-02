import React, { useEffect, useState } from "react";
import { SquareColors } from "./Props/SquareColors";
import {
  squareColorsBlue,
  squareColorsGreen,
  squareColorsGrey,
  squareColorsYellow,
} from "../data";

function PalleteColors() {
  const [theme, setTheme] = useState(
    localStorage.getItem("yellow-theme") || "theme"
  );

  const toggleTheme = () => {
    if (theme === "theme") {
      setTheme("yellow-theme");
    } else {
      setTheme(theme);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <section className="pallete-colors-container">
      <div className="palletes" onClick={toggleTheme}>
        <SquareColors data={squareColorsYellow} />
        <SquareColors data={squareColorsBlue} />
        <SquareColors data={squareColorsGrey} />
        <SquareColors data={squareColorsGreen} />
      </div>
    </section>
  );
}

export default PalleteColors;
