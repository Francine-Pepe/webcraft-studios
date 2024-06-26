import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Icons/Logo";
import { CloseMenu } from "../Icons/CloseMenu";
import { OpenMenu } from "../Icons/OpenMenu";
import Navigation from "./Props/Navigation";
import { nav } from "./../data";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive((isActive) => !isActive);
  }

  return (
    <section className="header-container">
      <div
        onClick={() => setIsActive(!isActive)}
        className="logo-container"
        id="logo"
      >
        <NavLink to={""}>
          <Logo />
        </NavLink>
      </div>
      <div className="menu" onClick={toggle}>{isActive ? <CloseMenu /> : <OpenMenu />}</div>

      <div onClick={toggle} className="navbar-container">
        {isActive && <Navigation data={nav} />}
      </div>
    </section>
  );
}

export default Navbar;
