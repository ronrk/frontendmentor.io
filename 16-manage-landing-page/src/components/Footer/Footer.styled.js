import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6em;
  padding: 0.5em 1em 2em;

  & .footer__serch-bar {
    display: flex;
    align-items: baseline;

    gap: 0.7em;

    & input {
      padding: 0.5em 2em;
      border-radius: 100px;
    }
  }

  & .footer__nav {
    & ul {
      display: flex;
      flex-direction: column;
      align-content: center;
      flex-wrap: wrap;
      max-height: 20vh;
      min-height: 20vh;

      gap: 1em;
      margin-bottom: 0.5em;

      & li {
        & a {
          transition: color 0.2s;
          &:hover {
            color: hsl(var(--clr-gray));
          }
        }
      }
    }
  }
  & .nav__social {
    display: flex;
    gap: 0.9em;
    margin-top: 0.6em;

    & svg {
      cursor: pointer;
      & > * {
        transition: fill 0.2s;
      }
      &:hover {
        & > * {
          fill: hsl(var(--clr-red));
        }
      }
    }
  }

  & .logo {
    & #logo-text {
      fill: #ffffff;
    }
  }

  @media screen and (min-width: 800px) {
    padding: 1.5em 2.5em 2em;
    display: grid;
    column-gap: 1em;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "logo main-nav search"
      "social-nav main-nav copyright";

    & .footer__serch-bar {
      grid-area: search;
    }
    & .logo {
      grid-area: logo;
    }
    & .copyright {
      grid-area: copyright;
      align-self: start;
      justify-self: center;
    }
    & .footer__nav {
      grid-area: main-nav;
      & ul {
        display: flex;

        flex-direction: column;
        align-content: center;
        flex-wrap: wrap;
        max-height: 20vh;
        min-height: 20vh;

        gap: 1.5em;
        margin-bottom: 0.5em;

        & li {
          & a {
            transition: color 0.2s;
            &:hover {
              color: hsl(var(--clr-gray));
            }
          }
        }
      }
    }
    & .nav__social {
      grid-area: social-nav;
      align-self: start;

      margin-top: 0;
    }
  }
`;

export default FooterWrapper;
