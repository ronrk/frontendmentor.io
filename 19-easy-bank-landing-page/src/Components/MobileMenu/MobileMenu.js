import React from "react";
import Wrapper from "./MobileMenu.styled";

const MobileMenu = ({ showMenu }) => {
  return (
    <Wrapper className={showMenu ? "show" : null}>
      <nav>
        <ul>
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
      </nav>
    </Wrapper>
  );
};

export default MobileMenu;
