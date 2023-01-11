import React from "react";
import Wrapper from "./Footer.styled";
import { ReactComponent as Logo } from "../../images/logo-bookmark.svg";
import { ReactComponent as FacebookIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { linkList } from "../../utils";

const Footer = () => {
  return (
    <Wrapper className="flex-c">
      <Logo className="logo" />
      <nav>
        <ul className="flex-c">
          {linkList.map((item, idx) => (
            <li key={idx}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="social-links flex">
        <FacebookIcon className="icon" />
        <TwitterIcon className="icon" />
      </div>
    </Wrapper>
  );
};

export default Footer;
