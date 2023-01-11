import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/shared/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/shared/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../../assets/shared/icon-close.svg";
import Wrapper from "./Navbar.styled";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { pathname } = useLocation();

  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <Wrapper className="primary-header flex">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>

      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={showNavbar}
        onClick={toggleNavbar}
      >
        <span className="sr-only">Menu</span>
        {showNavbar ? <CloseIcon /> : <MenuIcon />}
      </button>
      <nav className="nav">
        <div className=""></div>
        <ul
          id="primary-navigation"
          className={
            showNavbar
              ? "primary-navigation underline-indicators flex show"
              : "primary-navigation underline-indicators flex"
          }
        >
          <li className={pathname === "/" ? "active" : null}>
            <Link
              onClick={toggleNavbar}
              to="/"
              className="uppercase text-white letter-spacing-2 ff-sans-cond"
            >
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li className={pathname === "/destination" ? "active" : null}>
            <Link
              onClick={toggleNavbar}
              to="/destination?query=moon"
              className="uppercase text-white letter-spacing-2 ff-sans-cond"
            >
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li className={pathname === "/crew" ? "active" : null}>
            <Link
              onClick={toggleNavbar}
              to="/crew?query=commander"
              className="uppercase text-white letter-spacing-2 ff-sans-cond"
            >
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>
          <li className={pathname === "/technology" ? "active" : null}>
            <Link
              onClick={toggleNavbar}
              to="/technology?query=launchvehicle"
              className="uppercase text-white letter-spacing-2 ff-sans-cond"
            >
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
