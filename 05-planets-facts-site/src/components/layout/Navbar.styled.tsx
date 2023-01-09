import styled from "styled-components";

const NavbarWrapper = styled.header`
  border-bottom: 1px solid hsla(var(--clr-white), 0.4);
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;

  & .logo {
    white-space: nowrap;
  }

  & nav {
    width: 100%;
    --gap: 1em;
  }

  & .navlist {
    /* width: 100%; */
    /* align-self: stretch; */
    justify-content: space-evenly;
  }

  & .navlink {
    letter-spacing: 0.1em;
    color: hsla(var(--clr-white), 0.6);
    transition: all 0.7s linear;

    &.active,
    &:hover {
      color: hsl(var(--clr-white));
    }
    &.active {
      font-size: 1em;
    }
  }
  & .menu-icon {
    display: none;
  }

  @media screen and (min-width: 950px) {
    flex-direction: row;
    & nav {
      width: 70%;
    }
  }

  @media screen and (max-width: 534px) {
    flex-direction: row;
    & ul {
      display: none;
    }
    & .menu-icon {
      display: block;
    }
  }
`;

export default NavbarWrapper;
