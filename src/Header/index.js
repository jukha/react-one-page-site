import React, { useEffect } from "react";
// import "./temp.css";
import "./style.css";
import "../App.css";
import logo from "../assets/Logo.svg";
import hamIcon from "../assets/ham-icon.svg";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import { useScrollPosition } from "../hooks/useScrollPosition";

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  const closeMenu = () => {
    const mainEl = document.getElementById("navbarSupportedContent");
    const mainMenuItem = document.querySelectorAll(".nav-item>a");
    for (let i = 0; i < mainMenuItem.length; i++) {
      mainMenuItem[i].addEventListener("click", function () {
        console.log("clicked");
        if (mainEl.classList.contains("show")) mainEl.classList.remove("show");
      });
    }
    // For Main menu item: Hide Drop down menu after selection
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid fr-container justify-content-between align-items-center">
        <a href="#" className="navbar-brand">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={hamIcon} alt="hamburger-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 mt-lg-0 align-items-center">
            <li className="nav-item" onClick={closeMenu}>
              <a className="nav-link" href="#home" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={closeMenu}>
              <a className="nav-link" href="#theTech">
                The Tech
              </a>
            </li>
            <li className="nav-item" onClick={closeMenu}>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item text-center" onClick={closeMenu}>
              <a className="button cp" onClick={scrollToBottom}>
                Subscribe
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
