import React from "react";
import Wrapper from "./TestimonialArticle.styled";

const TestimonialArticle = ({ avatar, name, text }) => {
  return (
    <Wrapper className="bg-gray">
      <img src={avatar} alt="user avatar" className="testimonial__img" />
      <h3 className="fs-3 text-blue fw-b">{name}</h3>
      <p className="fs-4 text-gray text-center">{text}</p>
    </Wrapper>
  );
};

export default TestimonialArticle;
