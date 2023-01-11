import React from "react";
import Button from "../UI/Button";
import Wrapper from "./FAQ.styled";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <Wrapper className="text-center">
      <h2 className="text-dark fs-800">Frequently Asked Questions</h2>
      <p className="text-light fs-600">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <FAQAccordion />
      <Button className="filled blue">More Info</Button>
    </Wrapper>
  );
};

export default FAQ;
