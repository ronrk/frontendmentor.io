import React from "react";
import Wrapper from "./Hero.styled";
import heroImg from "../../assets/images/screen-mockups.svg";

const Hero = () => {
  return (
    <Wrapper>
      <div className="content">
        <h1>Build The Community Your Fans Will Love</h1>
        <p className="content__text">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <button className="btn btn-pink">Get Started For Free</button>
      </div>
      <img src={heroImg} alt="screen mockups " />
    </Wrapper>
  );
};

export default Hero;
