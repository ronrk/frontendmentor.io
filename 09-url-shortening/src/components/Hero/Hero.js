import React from "react";
import Wrapper from "./Hero.styled";
import heroImg from "../../images/illustration-working.svg";
import Button from "../UI/Button/Button";

const Hero = () => {
  return (
    <Wrapper className="container">
      <img src={heroImg} alt="hero" className="hero__img" />
      <div className="content">
        <h1 className="fs-900 text-dark">More than just shorter links</h1>
        <p className="text-light fs-600">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button className="filled primary text-white fs-600">
          Get Started
        </Button>
      </div>
    </Wrapper>
  );
};

export default Hero;
