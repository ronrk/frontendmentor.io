import styled from "styled-components";

const HeaderWrapper = styled.header`
  /* position: fixed; */

  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding-block: 2em;

  & .logo {
    max-width: 100px;
  }

  & .menu-btn {
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.125) rotate(12deg);
      box-shadow: 2px 3px 5px hsl(var(--clr-blue-dark), 0.1);
    }
    &:active {
      transform: scale(0.5) rotate(300deg);
    }
  }

  & .red-btn {
    display: none;
  }

  & .close-btn {
    transition: transform 0.2s ease-in-out;
    z-index: 1000;
    &:hover {
      transform: scale(1.125);
    }
    &:active {
      transform: scale(0.97);
    }
  }

  & .nav {
    display: none;
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    background-color: hsla(var(--clr-blue-dark), 0.2);

    & ul {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin: 6em auto 0;
      background-color: hsl(var(--clr-gray));
      width: 90%;
      text-align: center;
      padding: 2em;
      border-radius: 4px;

      & li {
        font-weight: 700;
        margin-bottom: 1.5em;

        a {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    &.show {
      display: flex;
    }
  }

  @media screen and (min-width: 800px) {
    position: static;
    & .menu-btn {
      display: none;
    }
    & .red-btn {
      display: block;
      margin: 0;
    }

    & .nav {
      display: flex;
      position: static;
      height: auto;
      width: auto;
      background: none;
      & ul {
        position: static;
        transform: translate(0);
        margin: 0;
        background-color: none;
        background-color: transparent;
        width: auto;
        text-align: center;
        padding: 0;
        border-radius: 4px;
        display: flex;
        align-items: center;
        gap: 1.2em;
        & li {
          font-weight: 700;
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default HeaderWrapper;
