import React from "react";

import Wrapper from "./Footer.styled";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as IconFacebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as IconYoutube } from "../../assets/images/icon-youtube.svg";
import { ReactComponent as IconTwitter } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Logo className="footer__logo" />
      <div className="social-icons">
        <IconFacebook />
        <IconYoutube />
        <IconTwitter />
        <IconPinterest />
        <IconInstagram />
      </div>
      <div className="footer__list a">
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
      </div>
      <div className="footer__list b">
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
      </div>
      <button className="btn btn-req">Request Invite</button>
      <span className="footer__copyright">© Easybank. All Rights Reserved</span>
    </Wrapper>
  );
};

export default Footer;
