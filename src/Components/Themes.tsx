import React, { useEffect, useState } from "react";
import { SquareColors } from "./Props/SquareColors";
import {
  squareColorsBlue,
  squareColorsGreen,
  squareColorsGrey,
  squareColorsYellow,
} from "../data";

function Themes() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      "yellow-theme" ||
      "blue-theme" ||
      "grey-theme" ||
      "green-theme"
  );

  const toggleTheme = () => {
    if (theme === "yellow-theme") {
      setTheme("yellow-theme");
    } else if (theme === "blue-theme") {
      setTheme("blue-theme");
    } else if (theme === "grey-theme") {
      setTheme("grey-theme");
    } else {
      setTheme("green-theme");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div onClick={toggleTheme}>
      {theme === "yellow-theme" ? (
        <SquareColors data={squareColorsYellow} />
      ) : theme === "blue-theme" ? (
        <SquareColors data={squareColorsBlue} />
      ) : theme === "grey-theme" ? (
        <SquareColors data={squareColorsGrey} />
      ) : (
        <SquareColors data={squareColorsGreen} />
      )}
    </div>
  );
}

export default Themes;
