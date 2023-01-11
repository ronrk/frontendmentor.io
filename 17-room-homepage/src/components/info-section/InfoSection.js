import React from "react";

import Wrapper from "./InfoSection.styled";

import img1 from "../../images/image-about-dark.jpg";
import img2 from "../../images/image-about-light.jpg";

const InfoSection = () => {
  return (
    <Wrapper>
      <img src={img1} alt="about" className="d-block" />
      <div className="content app-padding">
        <h3 className="text-black fs-2 fw-b uppercase">About our furniture</h3>
        <p className="text-gray fs-3">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={img2} alt="about 2" className="d-block" />
    </Wrapper>
  );
};

export default InfoSection;
