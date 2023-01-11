import styled from "styled-components";

const FooterWrapper = styled.footer`
  grid-row: 5/6;
  grid-column: full-start/full-end;

  display: grid;
  grid-template-columns:
    minmax(min-content, 1fr) repeat(3, max-content) minmax(min-content, 1fr)
    max-content minmax(min-content, 1fr);
  grid-template-rows: repeat(2, min-content);
  row-gap: 2rem;
  /* column-gap: 8rem; */

  background-color: var(--dark-blue);
  padding: 4rem 0;

  & .footer__logo {
    grid-row: 1/2;
    grid-column: 2/3;

    & path {
      fill: var(--white);
    }
  }
  & .social-icons {
    grid-row: 2/3;
    grid-column: 2/3;

    display: flex;
    align-items: center;
    gap: 2rem;

    & svg {
      cursor: pointer;
      & path {
        transition: all 0.2s;
      }
      &:hover {
        & path {
          fill: var(--lime-green);
        }
      }
    }
  }
  & .footer__list {
    grid-row: 1/3;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-left: 5vw;

    & li {
      & a {
        color: var(--very-light-gray);
        text-decoration: none;
        font-size: 1.3rem;
        transition: all 0.2s;
        font-weight: 300;
        &:hover {
          color: var(--lime-green);
        }
      }
    }

    &.a {
      grid-column: 3/4;
    }
    &.b {
      grid-column: 4/5;
    }
  }

  & .btn-req {
    grid-row: 1/2;
    grid-column: 6/7;
    justify-self: flex-end;
  }

  & .footer__copyright {
    grid-row: 2/3;
    grid-column: 6/7;
    font-size: 1.4rem;
    color: var(--grayish-blue);
  }

  @media screen and (max-width: 900px) {
    /* margin-top: 14rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .footer__list {
      text-align: center;
      margin-left: 0;
      align-self: stretch;
      margin: 0 auto;
    }
  }
`;

export default FooterWrapper;
