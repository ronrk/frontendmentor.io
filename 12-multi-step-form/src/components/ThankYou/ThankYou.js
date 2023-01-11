import React from "react";
import iconThank from "../../assets/images/icon-thank-you.svg";
import Wrapper from "./ThankYou.styled";

const ThankYou = () => {
  return (
    <Wrapper>
      <img src={iconThank} alt="icon thank" />
      <h2>Thank You!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </Wrapper>
  );
};

export default ThankYou;
