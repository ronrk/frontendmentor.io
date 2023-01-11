import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: absolute;
  width: 100%;
  overflow-x: hidden;

  justify-content: flex-start;
  align-items: center;
  padding: 2em 1em;

  @media screen and (min-width: 700px) {
    padding: 3.5em 3em;
  }

  & .header__logo {
    margin-inline: auto;

    @media screen and (min-width: 700px) {
      margin: 0;
      margin-right: 4rem;
    }
  }

  & .btn--menu img {
    width: 100%;
    @media screen and (min-width: 700px) {
      display: none;
    }
  }

  & .nav {
    transition: all 0.1s ease-in-out;
    transform: translateY(-300%);
    position: absolute;

    &.nav.show {
      /* position: fixed; */
      transition: all 0.5s;
      transform: translateY(0);
      z-index: 100;
      display: flex;
      align-items: center;
      gap: 2em;

      right: 0;
      height: 100%;
      width: 100%;
      padding-left: 1em;
      background-color: hsl(var(--color-white));
      color: hsl(var(--color-black));
    }
    & ul {
      list-style: none;
      gap: 2em;

      & li a {
        text-decoration: none;
        color: inherit;
      }
    }

    @media screen and (min-width: 700px) {
      display: block;
      position: relative;
      transform: translate(0);
      color: hsl(var(--color-white));
    }

    nav ul {
    }
  }
`;

export default HeaderWrapper;
