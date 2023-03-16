import React, { useState } from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
const Ready = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  
  return (
    <div>
      <div className={style.containerProtfolio}>
        <section className={style.protfolio}>
          <div className={style.contentBox}>
            <h1>
              Let's talk about <br /> your projects
            </h1>
          </div>
          <div className={style.imageBox}>
            <a href="../ContactMe/index.html">Contact Me</a>
          </div>
        </section>
        <section className={style.navBar} id="showBar">
          <div id="toggle" onClick={handleShowNavbar}></div>
          <nav className={`navbar  ${showNavbar && "active"}`}>
            <NavLink to="/" className={style.homeLink}>
              Philip Nssien
            </NavLink>
            <ul>
              <li>
                <NavLink to="/about">About Me</NavLink>
              </li>
              <li>
                <NavLink to="/design">Some Designs</NavLink>
              </li>
              <li>
                <NavLink to="/ready">You Ready!</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Me</NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Ready;
