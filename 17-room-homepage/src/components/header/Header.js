import React, { useState } from "react";

import Wrapper from "./Header.styled";

import logo from "../../images/logo.svg";
import iconMenu from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  return (
    <Wrapper className="flex">
      <button className="btn btn--menu" onClick={toggleNavbar}>
        <img src={isNavbarOpen ? iconClose : iconMenu} alt="menu" />
      </button>
      <img src={logo} alt="" className="header__logo" />
      <nav className={isNavbarOpen ? "nav show flex" : "nav"}>
        <button className="btn btn--menu d-block" onClick={toggleNavbar}>
          <img src={isNavbarOpen ? iconClose : iconMenu} alt="menu" />
        </button>
        <ul className="flex">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/">shop</a>
          </li>
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">contact</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
