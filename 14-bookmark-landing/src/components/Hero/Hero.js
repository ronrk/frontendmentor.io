import React from "react";

import { Button } from "../";
import Wrapper from "./Hero.styled";
import heroImg from "../../images/illustration-hero.svg";

const Hero = () => {
  return (
    <Wrapper>
      <div className="bg"></div>
      <img src={heroImg} alt="hero" className="hero__img" />
      <div className="content">
        <h1 className="text-dark fw-m fs-900">A simple bookmark manager</h1>
        <p className="text-light fs-600">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="btn-container flex fs-600">
          <Button className="filled blue">Get it on chrome</Button>
          <Button className="filled gray">Get it on firefox</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
