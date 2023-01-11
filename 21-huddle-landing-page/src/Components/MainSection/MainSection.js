import React from "react";
import Wrapper from "./MainSection.styled";

const MainSection = ({ title, text, img }) => {
  return (
    <Wrapper className="main-section">
      <div className="content">
        <h3 className="heading-3 content__title">{title}</h3>
        <p className="content__text">{text}</p>
      </div>
      <img src={img} alt="section illustration" />
    </Wrapper>
  );
};

export default MainSection;
