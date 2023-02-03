import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding-block: 3rem;
  & .container {
    justify-content: space-between;
  }

  & .content {
    max-width: 50%;
  }

  & .navs {
    & .navlinks {
      flex-grow: 0.5;

      & li {
        & a {
          transition: all 0.2s;
          &:hover {
            color: hsl(var(--clr-primary));
          }
        }
      }
    }
    & .social-nav {
      align-self: end;
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
  }
`;

export default FooterWrapper;
