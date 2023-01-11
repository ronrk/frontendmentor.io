import React from "react";

import Wrapper from "./Footer.styled";

import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../../images/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import { ReactComponent as Youtube } from "../../images/icon-youtube.svg";

const Footer = () => {
  return (
    <Wrapper className="bg-dark text-gray">
      <div className="footer__serch-bar">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Updated in your inbox"
        />
        <button className="btn red-btn rounded pi-2 pm-05 text-light bg-red">
          Go
        </button>
      </div>
      <nav className="footer__nav">
        <ul>
          <li>
            <a href="/" className="fs-5">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="fs-5">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="fs-5">
              Products
            </a>
          </li>
          <li>
            <a href="/" className="fs-5">
              About Us
            </a>
          </li>
          <li>
            <a href="/" className="fs-5">
              Careers
            </a>
          </li>
          <li>
            <a href="/" className="fs-5">
              Community
            </a>
          </li>
          <li>
            <a href="/" className="fs-5">
              Privay Policy
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav__social">
        <Facebook />
        <Youtube />
        <Twitter />
        <Pinterest />
        <Instagram />
      </div>
      <Logo className="logo" />
      <p className="copyright fs-6">Copyright 2020. All Rights Reserved</p>
    </Wrapper>
  );
};

export default Footer;
