import React from "react";
import heroImg from "../../assets/home/illustration-charts.svg";
import Wrapper from "./Hero.styled";
import StyledLink from "../ui/StyledLink";
import { ColorType } from "../Card/Card";

const Hero = () => {
  return (
    <Wrapper className="hero">
      <div className="hero_image">
        <img src={heroImg} alt="charts" />
      </div>
      <div className="hero__content">
        <h1 className="text-dark-2 fs-900 text-h-900">
          A simple solution to complex tasks is coming soon
        </h1>
        <p className="text-gray fs-600 text-h-800">
          Say goodbye to inefficient juggling of multiple apps, teams, and
          projects. Officelite is the new collaboration platform built with an
          intuitive interface to improve productivity.
        </p>
        <StyledLink
          to={"/register"}
          color={ColorType.PRIMARY}
          text={ColorType.WHITE}
          // shadow
          className="fs-700"
        >
          Get Started
        </StyledLink>
      </div>
    </Wrapper>
  );
};

export default Hero;
