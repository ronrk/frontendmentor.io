import React from "react";

import Wrapper from "./Navbar.styled";

import logo from "../../assets/images/logo.svg";
import { ReactComponent as IconOpen } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as IconClose } from "../../assets/images/icon-close.svg";

const Navbar = ({ toggleMenu, showMenu }) => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="nav__logo" />
      <ul className="nav__list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
      </ul>

      <button className="btn btn-req">Request Invite</button>
      <button className="btn btn-menu" onClick={toggleMenu}>
        {showMenu ? <IconClose /> : <IconOpen />}
      </button>
    </Wrapper>
  );
};

export default Navbar;
