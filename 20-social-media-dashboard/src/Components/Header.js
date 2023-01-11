import React from "react";
import Wrapper from "./Header.styled";

const Header = ({ onToggle }) => {
  return (
    <Wrapper>
      <div className="title">
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: 23,004</span>
      </div>
      <div className="toggle">
        <span>Dark Mode</span>
        <input
          type="checkbox"
          className="btn btn-toggle-theme"
          onClick={onToggle}
        ></input>
      </div>
    </Wrapper>
  );
};

export default Header;
