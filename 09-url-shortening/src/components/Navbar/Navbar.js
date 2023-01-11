import React, { useState } from "react";
import Wrapper from "./Navbar.styled";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "../UI/Button/Button";
import MobileMenu from "../UI/MobileMenu/MobileMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <Wrapper className="container">
      <Logo className="logo" />
      <button className="menu-btn" onClick={openMenu}>
        <AiOutlineMenu />
      </button>
      <nav className="nav">
        <ul>
          <li>
            <a href="/" className="fs-400 text-light">
              Features
            </a>
          </li>
          <li>
            <a href="/" className="fs-400 text-light">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="fs-400 text-light">
              Resources
            </a>
          </li>
        </ul>
      </nav>
      <div className="btns-container">
        <Button className="transparent filled text-light fs-400">Login</Button>
        <Button className="primary fs-400 text-white">Sign Up</Button>
      </div>
      {showMenu && <MobileMenu onClose={closeMenu} />}
    </Wrapper>
  );
};

export default Navbar;
