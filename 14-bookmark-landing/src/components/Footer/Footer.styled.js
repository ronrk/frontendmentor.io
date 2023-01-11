import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: hsl(var(--color-text-dark));
  color: #fff;
  align-items: center;
  padding: 2em;
  & .logo {
    margin-bottom: 1rem;
    & #text,
    #book {
      fill: #fff;
    }
  }

  & ul li a {
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 0.15em;
    transition: all 0.2s;
    &:hover {
      color: hsl(var(--color-secondary));
    }
  }
  & .social-links {
    margin-top: 1rem;
    --gap: 2rem;

    & > * {
      cursor: pointer;
      & > * {
        transition: all 0.2s;
      }
      & > *:hover {
        fill: hsl(var(--color-secondary));
      }
    }
  }

  @media screen and (min-width: 850px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    --gap: 4.5rem;

    & .logo {
      margin: 0;
    }

    & .social-links {
      margin: 0;
    }

    & nav {
      flex: 1;
      & ul {
        flex-direction: row;
        align-items: center;
        flex: 1;
        --gap: 1rem;
      }
    }
  }
`;

export default FooterWrapper;
