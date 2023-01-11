import React from "react";
import Wrapper from "./Sidebar.styled";

import { ReactComponent as IconClose } from "../../assets/images/icon-close.svg";

const Sidebar = ({ toggleSidebar, showSidebar }) => {
  return (
    <Wrapper className={showSidebar ? "sidebar show" : "sidebar"}>
      <button className="btn btn-close" onClick={toggleSidebar}>
        <IconClose />
      </button>

      <ul className="sidebar__list">
        <li>
          <a href="/">Collections</a>
        </li>
        <li>
          <a href="/">Men</a>
        </li>
        <li>
          <a href="/">Women</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Sidebar;
