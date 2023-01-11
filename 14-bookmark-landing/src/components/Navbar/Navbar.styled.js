import styled from "styled-components";

const NavbarWrapper = styled.header`
  position: relative;
  padding: 2.5em 2em;
  font-size: 1.4rem;
  & .primary-header {
    justify-content: space-between;
    align-items: center;
  }

  &.menu {
    & .primary-header {
      opacity: 0;
    }
  }

  & .menu-btn {
    @media screen and (min-width: 850px) {
      display: none;
    }
  }
  & .nav {
    display: none;
    font-size: 0.6em;
    letter-spacing: 0.2em;
    font-weight: 400;
    text-transform: uppercase;

    & ul {
      --gap: 2rem;
      display: flex;
      margin-right: 2rem;

      & li {
        color: hsl(var(--color-text-dark));

        & a {
          &:hover {
            color: hsl(var(--color-secondary));
          }
        }
      }
    }

    @media screen and (min-width: 850px) {
      display: flex;
      align-items: center;
    }
  }
`;

export default NavbarWrapper;
