import React, { useState } from 'react'
import "./style.css"
import GifImage from '../../Images/gifconnect.gif'
import Typed from 'react-typed'
import { NavLink } from "react-router-dom"

const HomeComponent = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
    
  }
    return (
        <div>
             <div className="container">
      <section className="homePage">
        <label>
          <h3>Let's Connect</h3>
          <h1>
            Hi, I'm 
            <span>
               <Typed 
                  strings={[
                    "Philip Nssien",
                    "a Software Developer"
                  ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
               />
            </span>
          </h1>
          <p>
            Software Developer with the right skills <br />
            needed to get the job done. Get in touch with-me, let's build.
          </p>
        </label>
        <label className="imageLabel">
          <span>
            <img src={GifImage} alt="connect.png" />
          </span>
        </label>
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
    )
}

export default HomeComponent;