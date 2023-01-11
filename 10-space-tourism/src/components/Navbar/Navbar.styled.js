import styled from "styled-components";

const NavbarWrapper = styled.header`
  justify-content: space-between;
  align-items: center;

  & .logo {
    margin: 2rem clamp(1.5rem, 5vw, 3.5rem);
  }

  & .primary-navigation {
    --underline-gap: 2rem;
    --gap: clamp(1.5rem, 5vw, 2rem);
    background-color: hsl(var(--color-white), 0.07);
    backdrop-filter: blur(2rem);

    & a {
      text-decoration: none;

      & span {
        font-weight: bold;
        margin-right: 0.5em;
      }
    }
  }
  & .mobile-nav-toggle {
    display: none;

    @media screen and (max-width: 35em) {
      display: block;
      position: absolute;
      z-index: 2000;
      right: 1rem;
      top: 2rem;
      width: 1.5rem;
      aspect-ratio: 1;
      transition: transform 500ms ease-out;

      &:active {
        transform: rotate(560deg);
      }
    }
  }
  @media (max-width: 35em) {
    & .primary-navigation {
      --underline-gap: 0.8rem;
      position: fixed;
      z-index: 1000;
      inset: 0 0 0 30%;
      padding: min(20rem, 15vh) 2rem;

      list-style: none;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 500ms ease-in-out;

      &.show {
        transform: translate(0);
      }

      &.underline-indicators {
        & .active {
          border: 0;
        }
      }
    }
  }
  @media (min-width: 35em) {
    & .primary-navigation {
      padding-inline: clamp(2rem, 6vw, 7rem);
    }
  }

  @media screen and (min-width: 35em) and (max-width: 44.999em) {
    & .primary-navigation {
      & a {
        & span {
          display: none;
        }
      }
    }
  }

  @media screen and (min-width: 45em) {
    &::before {
      content: "";
      display: block;
      position: relative;
      height: 1px;
      background: hsl(var(--color-white), 0.25);
      width: 100%;
      margin-right: -2rem;
      order: 1;
      z-index: 2;
    }

    & nav {
      order: 2;
    }
    & .primary-navigation {
      margin-block: 2rem;
    }
  }
`;

export default NavbarWrapper;
