import React from "react";

import Wrapper from "./SingleFeature.styled";

const SingleFeature = ({ icon, title, text }) => {
  return (
    <Wrapper>
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </Wrapper>
  );
};

export default SingleFeature;
