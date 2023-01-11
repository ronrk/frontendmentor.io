import React from "react";
import Wrapper from "./Footer.styled";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import { ReactComponent as IconPhone } from "../../assets/images/icon-phone.svg";
import { ReactComponent as IconEmail } from "../../assets/images/icon-email.svg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <Logo className="footer__logo" />
        <p className="footer__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
        <div className="footer__contact">
          <span>
            <IconPhone /> Phone : +1-543-123-4567
          </span>
          <span>
            <IconEmail /> example@huddle.com
          </span>
        </div>
        <div className="footer__socials">
          <AiFillFacebook className="social__icon" />
          <AiFillInstagram className="social__icon" />
          <AiFillTwitterSquare className="social__icon" />
        </div>
      </footer>
      <div className="newsletter">
        <h4 className="newsletter__title">newsletter</h4>
        <p className="newsletter__text">
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address
        </p>
        <form className="newsletter__form">
          <input type="email" name="" id="" />
          <span className="error">Check your email</span>
          <button className="btn btn-pink">Subscribe</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Footer;
