import React from "react";

import Wrapper from "./Hero.styled";

import heroImg from "../../images/illustration-intro.svg";

const Hero = () => {
  return (
    <Wrapper className="padding">
      <img src={heroImg} alt="" className="hero__img" />
      <div className="hero__content">
        <h1 className="text-blue fs-1 fw-m">
          Bring everyone together to build better products.
        </h1>
        <p className="text-gray fs-4">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="btn red-btn bg-red rounded pi-3 pm-1 text-light fw-m">
          Get Started
        </button>
      </div>
    </Wrapper>
  );
};

export default Hero;
