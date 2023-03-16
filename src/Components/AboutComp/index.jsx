import React, { useState } from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Reuse from "../../Images/reuse.png";
import Friendly from "../../Images/friendly.png";
import Bug from "../../Images/bug.png";
import Read from "../../Images/read.png";
import { NavLink } from "react-router-dom";

const AboutComponent = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <div className="containerAbout">
        <section className="about">
          <div className="aboutMe">
            <small className="aboutsmall"></small>
            <strong></strong>
            <span>
              <h1>
                I'm <span>PHILIP NSSIEN</span>
              </h1>
              <p>
                A Talented, Ambitious, And Self-Motivated FrontEnd Developer.
                Prolific Web Developer With Great Experience Ranging From
                Frontend To Backend And Proven Endto-End Development Skills.
              </p>
              <p>
                I’m A Talented, Ambitious, And Self-Motivated Developer With A
                Solid Technical Background And Useful Skills Ranging From
                Self-Discipline, Teamwork, And The Ability To Work With Minimum
                Supervision.
              </p>
              <Link to="" className="findOutMore">
                Find Out More
              </Link>
            </span>
            <span className="myWaysAboutMe">
              <label>
                <span>
                  <img src={Reuse} alt="reuse.png" />
                  <h2>Reusable codes</h2>
                  <p>
                    I write code that are
                    <br />
                    reusable and long lasting for developers
                  </p>
                </span>
                <span>
                  <img src={Friendly} alt="friendly.png" />
                  <h2>Great User Experience</h2>
                  <p>
                    Create website and applications <br />
                    that has great user Experience, ranging from the production
                    to finish stage
                  </p>
                </span>
                <span>
                  <img src={Bug} alt="bug.png" />
                  <h2>Bug solution</h2>
                  <p>
                    Identify and fix bugs in code <br /> to ensure it functions
                    as intended by the developer.
                  </p>
                </span>
                <span>
                  <img src={Read} alt="read.png" />
                  <h2>Easy to read</h2>
                  <p>
                    Write codes and software that are very <br />
                    easy to read and understand by both devs and clients.
                  </p>
                </span>
              </label>
            </span>
          </div>
        </section>
        <section className="navBar" id="showBar">
          <div id="toggle" onClick={handleShowNavbar}></div>
          <nav className={`navbar  ${showNavbar && "active"}`}>
            <NavLink to="/" className="homeLink">
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

export default AboutComponent;
