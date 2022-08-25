import React from "react";
import "./style.css";
import "../App.css";
import logo from "../assets/Logo.svg";
import hamIcon from "../assets/ham-icon.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid fr-container justify-content-between align-items-center">
        <a className="navbar-brand">
          <img src={logo} alt="logo" />
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
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">The Tech</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
            <li className="nav-item text-center">
              <a className="btn">Subscribe</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;