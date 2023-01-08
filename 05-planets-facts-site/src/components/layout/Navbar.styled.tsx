import styled from "styled-components";

const NavbarWrapper = styled.header`
  border-bottom: 1px solid hsla(var(--clr-white), 0.4);
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;

  & .navlink {
    letter-spacing: 0.1em;
    color: hsla(var(--clr-white), 0.6);
    transition: all 0.7s linear;

    &.active,
    &:hover {
      color: hsl(var(--clr-white));
    }
  }
  & .menu-icon {
    display: none;
  }

  @media screen and (max-width: 450px) {
    & ul {
      display: none;
    }
    & .menu-icon {
      display: block;
    }
  }
`;

export default NavbarWrapper;
