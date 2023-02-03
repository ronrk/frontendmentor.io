import Link from "next/link";
import React from "react";
import { navLinks } from "../../../utils/utils";
import { IconFacebook, IconInstagram, IconTwitter, Logo } from "../../ui/icons";
import FooterWrapper from "./Footer.wrapper";

const Footer = () => {
  return (
    <FooterWrapper className="bg-black text-gray">
      <div className="container flex">
        <div className="content flex-col text-body">
          <Logo />
          <p>
            {`Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.`}
          </p>
          <span>Copyright 2021. All Rights Reserved</span>
        </div>
        <div className="navs flex-col">
          <nav className="navlinks">
            <ul className="flex">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.path}
                    className="sub-heading text-gray-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="social-nav">
            <ul className="flex">
              <li>
                <Link href={"/"}>
                  <IconFacebook />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <IconTwitter />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <IconInstagram />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
