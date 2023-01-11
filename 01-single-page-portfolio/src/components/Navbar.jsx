import React from "react";
import GithubIcon from "./ui/GithubIcon";
import FrontendIcon from "./ui/FronendIcon";
import LinkedinIcon from "./ui/LinkedinIcon";
import TwitterIcon from "./ui/TwitterIcon";
import Wrapper from "../styles/Navbar.styled";

const Navbar = ({ className }) => {
  return (
    <Wrapper className={`text-center ${className}`}>
      <h2 className="text-white-2 ff-sans">adamkeys</h2>
      <div className="social-icons flex">
        <GithubIcon className="social-icon" />
        <FrontendIcon className="social-icon" />
        <LinkedinIcon className="social-icon" />
        <TwitterIcon className="social-icon" />
      </div>
    </Wrapper>
  );
};

export default Navbar;
