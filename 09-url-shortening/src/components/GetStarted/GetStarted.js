import React from "react";
import Wrapper from "./GetStarted.styled";
import Button from "../UI/Button/Button";

const GetStarted = () => {
  return (
    <Wrapper className="flex-c container">
      <h2 className="fs-800 text-white">Boost your links today</h2>
      <Button className="filled primary text-white fs-600">Get Started</Button>
    </Wrapper>
  );
};

export default GetStarted;
