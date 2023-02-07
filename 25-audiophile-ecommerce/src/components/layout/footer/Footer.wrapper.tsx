import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding-block: 3rem;
  & .container {
    display: grid;
    grid-template-columns: 50% 1fr%;
    grid-auto-rows: min-content;
    grid-template-areas:
      "logo navlinks"
      "description social"
      "copyright .";
  }

  & .description {
    grid-area: description;
  }

  & .copyright {
    grid-area: copyright;
  }

  & .social-nav {
    grid-area: social;
    align-self: end;
    justify-self: end;
    & a {
      & svg {
        & > * {
          transition: all 0.2s;
        }
      }
      &:hover {
        & svg {
          & > * {
            fill: hsl(var(--clr-primary));
          }
        }
      }
    }
  }

  & .navlinks {
    grid-area: navlinks;
    justify-self: end;

    & li {
      & a {
        transition: all 0.2s;
        &:hover {
          color: hsl(var(--clr-primary));
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    & .container {
      grid-template-columns: 1fr;
      grid-template-areas:
        "logo ."
        "navlinks ."
        "description ."
        "copyright social";
    }
  }
  @media screen and (max-width: 650px) {
    & .container {
      text-align: center;
      grid-template-columns: 1fr;
      grid-template-areas:
        "logo"
        "navlinks"
        "description"
        "copyright"
        "social";
      align-items: center;
      justify-items: center;
    }
    & .social-nav {
      justify-self: center;
    }

    & .navlinks {
      justify-self: center;
      & ul {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export default FooterWrapper;
