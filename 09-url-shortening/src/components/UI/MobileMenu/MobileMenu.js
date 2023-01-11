import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button/Button";

const StyledMenu = styled.div`
  width: 80%;
  /* min-height: 80vh; */
  position: fixed;
  z-index: 20000;
  top: 10vh;
  padding-inline: 1em;
  padding-block: 1em 4em;
  border-radius: 15px;
  box-shadow: 2px 10px 20px 2px rgba(0, 0, 0, 0.4);
  background-color: var(--color-primary-dark);

  & button {
    aspect-ratio: 7;
    margin-inline: 1em;
  }
  & .close-btn {
    align-self: flex-end;
  }

  & ul {
    align-items: center;
    --gap: 3rem;
    margin-top: -2rem;

    & a {
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

const MobileMenu = ({ onClose }) => {
  return (
    <StyledMenu className="text-white container flex-c">
      <button className="close-btn" onClick={onClose}>
        <AiOutlineClose className="text-white fs-800" />
      </button>
      <nav className="mobile-nav">
        <ul className="flex-c">
          <li>
            <a className="fs-600 text-white" href="/">
              Features
            </a>
          </li>
          <li>
            <a className="fs-600 text-white" href="/">
              Pricing
            </a>
          </li>
          <li>
            <a className="fs-600 text-white" href="/">
              Resources
            </a>
          </li>
        </ul>
      </nav>
      <hr />
      <div className="btns-container-mobile flex-c">
        <Button className="text-white filled transparent fs-600">Login</Button>
        <Button className="text-white filled primary fillWidth fs-600">
          Sign Up
        </Button>
      </div>
    </StyledMenu>
  );
};

export default MobileMenu;
