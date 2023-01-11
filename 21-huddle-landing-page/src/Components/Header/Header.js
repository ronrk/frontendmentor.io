import React from "react";
import Wrapper from "./Header.styled";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <button className="btn btn-white">Try It Free</button>
    </Wrapper>
  );
};

export default Header;
