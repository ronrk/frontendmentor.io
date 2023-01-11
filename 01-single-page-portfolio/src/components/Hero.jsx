import React from "react";
import smallImg from "../assets/images/image-removebg.png";
import mediumImg from "../assets/images/image-profile-tablet.webp";
import bigImg from "../assets/images/image-profile-desktop.webp";
import Wrapper from "../styles/Hero.styled";

const Hero = () => {
  return (
    <Wrapper className="text-center">
      <picture>
        <img src={smallImg} alt="hero" />
      </picture>
      <div className="content">
        <h1 className="text-white-2 ff-sans fs-400">
          Nice to meet you! I’m <span>Adam Keyes</span>.
        </h1>
        <p className="text-white fs-100 ff-sans">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <a href="#contact" className="link uppercase">
          contact me
        </a>
      </div>
    </Wrapper>
  );
};

export default Hero;
