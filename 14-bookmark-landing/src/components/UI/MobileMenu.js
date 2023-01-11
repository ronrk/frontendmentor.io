import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo-bookmark.svg";
import { ReactComponent as CloseIcon } from "../../images/icon-close.svg";
import { ReactComponent as FacebookIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { linkList } from "../../utils";
import Button from "./Button";

const MobileMenuWrapper = styled.nav`
  position: absolute;
  z-index: 10000000;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;

  background-color: hsl(var(--color-text-dark), 0.8);
  backdrop-filter: blur(10px);
  padding: 3em 2em;
  font-size: 1.4rem;

  & .menu-header {
    justify-content: space-between;

    & .logo {
      & #circle,
      #text {
        fill: #fff;
      }
      & #book {
        fill: hsl(var(--color-text-dark), 1);
      }
    }
  }

  & ul {
    margin-top: 5rem;
    align-items: center;
    text-transform: uppercase;

    & li {
      padding: 1em;
      border-top: 0.7px solid hsl(var(--color-text-light), 0.6);
      &:not(:last-child) {
      }
      &:not(:first-child) {
      }
      width: 100%;
      text-align: center;
      color: #fff;
      letter-spacing: 0.2em;
      & a {
        transition: color 0.2s;
        &:hover {
          color: hsl(var(--color-secondary));
        }
      }
    }
  }
  .social-links {
    margin-top: 80%;
    justify-content: center;
    gap: 3rem;

    & > * {
      cursor: pointer;
      & > * {
        transition: fill 0.2s;
      }

      &:hover {
        & > * {
          fill: hsl(var(--color-secondary));
        }
      }
    }
  }
`;

const MobileMenu = ({ toggleMenu }) => {
  return (
    <MobileMenuWrapper>
      <div className="menu-header flex">
        <Logo className="logo" />
        <button onClick={toggleMenu}>
          <CloseIcon />
        </button>
      </div>
      <ul className="flex-c">
        {linkList.map((item, idx) => (
          <li key={item.name + idx}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
        <li>
          <Button className="outlined fullWidth hoverRed">Login</Button>
        </li>
      </ul>
      <div className="social-links flex">
        <FacebookIcon className="icon" />
        <TwitterIcon className="icon" />
      </div>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
