import React from "react";
import Button from "../UI/Button";
import Wrapper from "./Contact.styled";

const Contact = () => {
  return (
    <Wrapper className="text-center flex-c">
      <span className="fs-500">35,000+ already joined</span>
      <h2 className="fs-800">Stay up-to-date with what we’re doing</h2>
      <div className="form flex-c">
        <input type="email" placeholder="Enter your email address" />
        <Button className="filled red">Contact Us</Button>
      </div>
    </Wrapper>
  );
};

export default Contact;
