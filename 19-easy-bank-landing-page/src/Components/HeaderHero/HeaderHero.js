import React from "react";
import Wrapper from "./HeaderHero.styled";

import heroImg from "../../assets/images/image-mockups.png";

const HeaderHero = () => {
  return (
    <Wrapper>
      <div className="hero__content">
        <h1 className="hero__heading">Next generation digital banking</h1>
        <p className="hero__text">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="btn btn-req">Request Invite</button>
      </div>
      <img src={heroImg} alt="hero" />
    </Wrapper>
  );
};

export default HeaderHero;
