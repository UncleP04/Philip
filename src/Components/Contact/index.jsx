import React, { useState } from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import Twitter from '../../Images/tw.gif'
import LinkedIn from '../../Images/lk.gif'
import Medium from '../../Images/me.png'
import YouTube from '../../Images/yt.gif'
import Signal from '../../Images/signal.gif'
const Contact = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  
  return (
    <div>
           <div className={style.containerContact}>
          <section className={style.contact}>
            <div className={style.contactMe}>
              <span className={style.getIntouch}>
                <h1>
                  let's get intouch <br />
                  either by mail or Media
                </h1>
                <label>
                  <img
                    src={Signal}
                    alt="signal"
                    className={style.signal}
                  />
                  <span className={style.socialLinks}>
                    <a href="https://www.linkedin.com/in/philip-nssien/">
                      <img src={LinkedIn} alt=""
                    /></a>
                    <a href="https://twitter.com/Nssienphilip"
                      ><img src={Twitter} alt=""
                    /></a>
                    <a href="https://medium.com/@Nssienphilip4"
                      ><img src={Medium} alt=""
                    /></a>
                    <a href="https://youtu.be/i7Uzmm-5S3A"
                      ><img src={YouTube} alt=""
                    /></a>
                  </span>
                </label>
              </span>
             <span className={style.messageBox}>
                <form className={style.div} action="https://getform.io/f/a40aacce-2dbb-49d3-b78e-8b9e96195c6e" method="post">
                  <label className={style.inputBox}>
                    <span>
                      <label for="name">Name</label>
                      <input type="text" id="name" name="name" />
                    </span>
                    <span>
                      <label for="email">Email</label>
                      <input type="text" id="email" name="email" />
                    </span>
                  </label>
                  <label className={style.messageContent}>
                    <label for="message">Message</label>
                    <textarea name="textarea  " id="message"></textarea>
                  </label>
                  <button value="submit" type="submit" >Message Me!</button>
                </form>
              </span>
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

export default Contact;
