import React from "react";
import Wrapper from "./SingleArticle.styled";

const SingleArticle = ({ image, author, title, text }) => {
  return (
    <Wrapper>
      <img src={image} alt="article preview" />
      <span>by {author}</span>
      <h4>{title}</h4>
      <p>{text}</p>
    </Wrapper>
  );
};

export default SingleArticle;
