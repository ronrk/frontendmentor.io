import React from "react";
import Wrapper from "./Header.styled";
import { DarkIcon } from "../assets/icons";
import { LightIcon } from "../assets/icons";

const Header = ({ onToggleMode, dark }) => {
  return (
    <Wrapper>
      <h1 className="text-dark fs-500">devfinder</h1>
      <button className="btn--mode text-primary" onClick={onToggleMode}>
        {dark ? "light" : "dark"}{" "}
        {dark ? <LightIcon className="icon" /> : <DarkIcon className="icon" />}
      </button>
    </Wrapper>
  );
};

export default Header;
