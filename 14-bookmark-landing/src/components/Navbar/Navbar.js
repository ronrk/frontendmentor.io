import React, { useState } from "react";
import Wrapper from "./Navbar.styled";

import { ReactComponent as Logo } from "../../images/logo-bookmark.svg";
import { ReactComponent as MenuIcon } from "../../images/icon-hamburger.svg";
import { linkList } from "../../utils";
import MobileMenu from "../UI/MobileMenu";
import Button from "../UI/Button";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("click");
    setShowMenu((prev) => !prev);
  };

  return (
    <Wrapper className={showMenu ? "menu" : null}>
      <div className="primary-header flex">
        <Logo className="logo" />
        <button onClick={toggleMenu} className="menu-btn">
          <MenuIcon className="menu-icon" />
        </button>
        <nav className="nav">
          <ul className="flex">
            {linkList.map((item, idx) => (
              <li key={idx}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
          <Button className="filled red">Login</Button>
        </nav>
      </div>
      {showMenu ? <MobileMenu toggleMenu={toggleMenu} /> : null}
    </Wrapper>
  );
};

export default Navbar;
