import React, { useState } from "react";

import Wrapper from "./Header.styled";
import logo from "../../images/logo.svg";
import menuIcon from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";

const Haeder = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  return (
    <Wrapper className="padding">
      <img src={logo} alt="logo" className="logo" />

      <button
        className={isNavbarOpen ? "close-btn btn" : "menu-btn btn"}
        onClick={toggleNavbar}
      >
        <img src={isNavbarOpen ? closeIcon : menuIcon} alt="menu button" />
      </button>

      <nav className={isNavbarOpen ? "nav show" : "nav"}>
        <ul>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Community</a>
          </li>
        </ul>
      </nav>
      <button className="red-btn btn rounded bg-red text-light fw-b fs-6 pi-2 pm-1">
        Get Started
      </button>
    </Wrapper>
  );
};

export default Haeder;
