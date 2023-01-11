import React from "react";

import Slider from "../slider/Slider";

import Wrapper from "./Hero.styled";
import iconArrow from "../../images/icon-arrow.svg";

const Hero = ({ img, title, text, nextSlide, prevSlide }) => {
  return (
    <Wrapper>
      <img src={img} alt="hero" className="hero__img d-block" />
      <Slider nextSlide={nextSlide} prevSlide={prevSlide} />
      <div className="hero__content app-padding flex">
        <h1 className="fs-1 fw-m">{title}</h1>
        <p className="text-gray -2 fs-3">{text}</p>
        <button className="btn btn--shop text-black uppercase fw-m flex">
          shop now <img src={iconArrow} alt="arrow" className="d-block" />
        </button>
      </div>
    </Wrapper>
  );
};

export default Hero;
