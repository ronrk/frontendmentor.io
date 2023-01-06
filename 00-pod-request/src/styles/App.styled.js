import styled from "styled-components";
import mobileBg from "../assets/mobile/image-host.jpg";
import tabletBg from "../assets/tablet/image-host.jpg";
import desktopBg from "../assets/desktop/image-host.jpg";

const AppStyled = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;
  padding-inline: 2.1rem;

  & .bg {
    position: absolute;
    top: 0;
    /* left: 0; */
    background-image: url(${mobileBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: screen;
    height: 100vh;
    width: 100%;
    z-index: -1;
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--clr-dark-2);
      opacity: 0.9;
    }
  }
  & .logo {
    width: 12rem;
    margin-top: 20%;
    margin-bottom: 2rem;
  }
  & .title {
    color: var(--clr-primary);
    text-transform: uppercase;
    font-weight: 300;
    font-size: 2.6rem;
    letter-spacing: 0.05em;
    margin-bottom: 1.3rem;

    & span {
      color: var(--clr-white);
      display: block;
    }
  }
  & .content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    & p {
      color: var(--clr-light);
      font-size: 1.3rem;
      line-height: 1.5;
      font-weight: 300;
      padding-inline: 1rem;
    }
  }

  & .social-icons {
    margin-top: 1.4rem;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    & > * {
      width: 8rem;
      height: 2rem;
    }
  }

  & .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    & input {
      height: 4rem;
      border-radius: 100px;
      border: none;
      padding-inline: 2rem;
      background-color: var(--clr-dark);
      color: var(--clr-white);
      font-size: 1.2rem;
      font-family: inherit;
      &::placeholder {
        color: var(--clr-light);
        font-weight: 700;
        font-size: 1.2rem;
      }
      &:focus {
        outline: 0;
        &::placeholder {
          color: var(--clr-white);
        }
      }
    }
    & button {
      border: none;
      background-color: var(--clr-primary);
      color: var(--clr-dark-2);
      font-weight: 400;
      height: 4rem;
      border-radius: 100px;
      text-transform: capitalize;
      font-size: 1.2rem;
      cursor: pointer;
      transition: filter 0.2s;
      font-family: var(--ff);
      letter-spacing: 0.05em;

      &:hover {
        filter: brightness(120%);
      }
    }
  }

  @media screen and (min-width: 800px) {
    text-align: left;
    align-items: flex-start;
    padding: 0;
    padding-right: 8rem;
    background-color: var(--clr-dark-2);
    padding-left: 3rem;

    & .logo {
      margin: 0;
      margin-top: 10%;
    }

    & .content {
      background-color: var(--clr-dark-2);
      padding: 4rem 2rem;
      z-index: 2000;
      max-width: 50rem;
      margin-top: 2rem;
    }

    & .social-icons {
      order: 5;
      margin-top: 4rem;

      justify-content: flex-start;
      gap: 2rem;
    }

    & .form {
      flex-direction: row;
      margin-top: 3rem;
      position: relative;
      width: 80%;

      & input {
        position: relative;
        width: 100%;
      }
      & button {
        position: absolute;
        right: 0;
        height: 3.5rem;
        margin-top: 0.3rem;
        padding-inline: 1rem;
      }
    }

    & .bg {
      position: absolute;
      right: 0;
      top: 3rem;
      width: 40%;
      max-width: 700px;
      height: 80%;
      min-width: fit-content;
      background-image: url(${tabletBg});
      background-repeat: no-repeat;
      background-repeat: no-repeat;
      background-size: fill;
      max-height: 100%;
      z-index: 0;

      &::before {
        display: none;

        content: "";
      }
    }
  }
  @media screen and (min-width: 1200px) {
    & .bg {
      position: absolute;
      right: 0;
      top: 3rem;
      width: 60%;
      max-width: 700px;
      height: 80%;
      min-width: fit-content;
      background-image: url(${desktopBg});
      background-repeat: no-repeat;
      background-repeat: no-repeat;
      background-size: fill;
      max-height: 100%;
    }
  }
`;

export default AppStyled;
