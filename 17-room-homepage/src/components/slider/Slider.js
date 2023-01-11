import React from "react";

import Wrapper from "./Slider.styled";

import arrowLeft from "../../images/icon-angle-left.svg";
import arrowRight from "../../images/icon-angle-right.svg";

const Slider = ({ prevSlide, nextSlide }) => {
  return (
    <Wrapper className="slider flex">
      <button onClick={prevSlide} className="btn btn--slider btn--slider-left">
        <img src={arrowLeft} alt="slide left" className="slider-left d-block" />
      </button>
      <button onClick={nextSlide} className="btn btn--slider btn--slider-right">
        <img
          src={arrowRight}
          alt="slide right"
          className="slider-right d-block"
        />
      </button>
    </Wrapper>
  );
};

export default Slider;
