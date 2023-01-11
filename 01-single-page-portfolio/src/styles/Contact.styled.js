import styled from "styled-components";
import bg from "../assets/images/pattern-rings.svg";

/* 

&::before {
    content: "";
    width: 100%;
    height: 100%;
    max-width: 550px;
    display: block;
    position: absolute;
    background-image: url(${bgLeft});
    background-repeat: no-repeat;
    /* background-position: -20rem 3rem; */
// background-size: contain;
// left: -20rem;
// top: 2rem;

const ContactWrapper = styled.section`
  padding-block: 2rem;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    max-width: 550px;
    display: block;
    position: absolute;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: -20rem 70%;
    z-index: 10;
  }

  padding-inline: 1em;
  margin-inline: auto;
  & .body {
    max-width: 600px;
    margin-inline: auto;
  }
  & h3 {
    margin-bottom: 1rem;
  }
  & p {
    line-height: 1.5;
    letter-spacing: 0.7px;
  }

  & form {
    margin-block: 2rem;

    & .error-message {
      color: red;
      text-align: right;
      margin-top: -2rem;
      font-family: var(--ff);
    }

    & input,
    & textarea {
      background: transparent;
      padding: 2em;
      border: 0;
      border-bottom: 1px solid hsl(var(--clr-white));
      color: hsl(var(--clr-primary));
      font-family: var(--ff);
      font-size: 1rem;
      position: relative;
      &.error {
        border-color: red;
        position: relative;
      }

      &:focus {
        outline: none;
        border-color: hsl(var(--clr-primary));

        &::placeholder {
          color: hsl(var(--clr-primary));
        }
      }
    }

    & .submit-btn {
      align-self: flex-end;
    }
  }
  & hr {
    margin: 0;
  }
  @media screen and (min-width: 1000px) {
    padding-inline: 2em;
    & .body {
      display: flex;
      max-width: 100%;
      justify-content: space-between;

      & .content {
        width: 40%;
        text-align: left;
      }
      & form {
        width: 50%;
      }

      & hr {
        display: none;
      }
    }
  }
`;

export default ContactWrapper;
