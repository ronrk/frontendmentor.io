import styled from "styled-components";

const FooterWrapper = styled.footer`
  align-items: center;
  text-align: center;
  padding: 2em 4em;

  & ul {
    margin-bottom: 3rem;
    --gap: 0.7rem;

    & a {
      &:hover {
        color: var(--color-white);
      }
    }
  }

  & .logo {
    margin-bottom: 2.5rem;
    & #logo {
      fill: #fff;
    }
  }

  & .social-links {
    --gap: 2.5rem;

    & > * {
      & > * {
        cursor: pointer;
        transition: all 0.2s;
      }
      & > *:hover {
        fill: var(--color-secondary);
      }
    }
  }

  @media screen and (min-width: 850px) {
    flex-direction: row;
    justify-content: space-between;
    & .logo {
      margin-bottom: 0;
      align-self: flex-start;
      flex-grow: 1;
    }

    & nav {
      text-align: left;
      display: flex;
      gap: 5rem;
      margin-right: 10rem;
    }
    & ul {
      margin-bottom: 0;
    }
    & .social-links {
      align-self: flex-start;
    }
  }
`;

export default FooterWrapper;
