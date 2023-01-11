import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images//icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../images/icon-pinterest.svg";
import { ReactComponent as InstagramIcon } from "../../images/icon-instagram.svg";
import Wrapper from "./Footer.styled";

const Footer = () => {
  return (
    <Wrapper className="container bg-dark flex-c">
      <Logo className="logo" />
      <nav>
        <ul className="flex-c">
          <li className="text-white fs-400">Features</li>
          <li>
            <a className="text-light fs-400" href="/">
              Link Shortening
            </a>
          </li>
          <li>
            <a className="text-light fs-400" href="/">
              Branded Links
            </a>
          </li>
          <li>
            <a className="text-light fs-400" href="/">
              Analytics
            </a>
          </li>
        </ul>
        <ul className="flex-c">
          <li className="text-white fs-400">Resources</li>
          <li>
            <a className="text-light fs-400" href="/">
              Blog
            </a>
          </li>
          <li>
            <a className="text-light fs-400" href="/">
              Developers
            </a>
          </li>
          <li>
            <a className="text-light fs-400" href="/">
              Support
            </a>
          </li>
        </ul>
        <ul className="flex-c">
          <li className="text-white fs-400">Company</li>
          <li>
            <a className="text-light fs-400" href="/">
              About
            </a>
          </li>
          <li>
            <a className="text-light fs-400" href="/">
              Our Team
            </a>
          </li>
          <li>
            <a className="text-light fs-400" href="/">
              Careers
            </a>
          </li>
          <li>
            <a className="text-light fs-400" href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="social-links flex">
        <FacebookIcon />
        <TwitterIcon />
        <PinterestIcon />
        <InstagramIcon />
      </div>
    </Wrapper>
  );
};

export default Footer;
