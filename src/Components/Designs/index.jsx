import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom"
import Airbnbs from '../../Images/air.png'
import Chariheal from '../../Images/chari (1).png'
import Tailorme from '../../Images/tail.png'
import LaBoutique from '../../Images/la.png'
import Coin from '../../Images/coin.png'
import Increment from '../../Images/cal.png'
import BigJo from '../../Images/big.png'
import C21fg from '../../Images/c21.png'
import Hypefarm from '../../Images/hype.png'

const DesignComponent = () => {

      
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div>
      <div className="containerProtfolio">
        <section className="protfolio">
          <div className="contentBox">
            <h1>
              Take a look at what I've <br />
              created and get <br />
              inspired by.
            </h1>
            <small title="hover on Image" className="small">See More</small>
          </div>
          <div className="imageBox">
            <span>
              <a href="https://airbnbs.vercel.app" target="_blank">
                View Site
              </a>
              <img src={Airbnbs} alt="airbnb.png" />
            </span>
            <span>
              <a href="https://c21fg.vercel.app" target="_blank">
                View Site
              </a>
              <img src={C21fg} alt="c21fg.png" />
            </span>
            <span>
              <a href="https://bigjoconcierge.onrender.com" target="_blank">
                View Site
              </a>
              <img
                src={BigJo}
                alt="bigjo-concierge.png"
              />
            </span>
            <span>
              <a href="https://la-boutique.vercel.app" target="_blank">
                View Site
              </a>
              <img
                src={LaBoutique}
                alt="la-boutique.png"
              />
            </span>
            <span>
              <a href="https://coingego.vercel.app" target="_blank">
                View Site
              </a>
              <img src={Coin} alt="coingego.png" />
            </span>
            <span>
              <a href="https://chariheal.vercel.app" target="_blank">
                View Site
              </a>
              <img
                src={Chariheal}
                alt="chariheal.png"
              />
            </span>
            <span>
              <a href="https://hypefarm.io" target="_blank">
                View Site
              </a>
              <img src={Hypefarm} alt="hypefarm.png" />
            </span>
            <span>
              <a href="https://cookiesdina.vercel.app/" target="_blank">
                View Site
              </a>
              <img src={Tailorme} alt="tailorme.png" />
            </span>
            <span>
              <a href="https://emerix.vercel.app" target="_blank">
                View Site
              </a>
              <img src={Increment} alt="increment.png" />
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

export default DesignComponent;
