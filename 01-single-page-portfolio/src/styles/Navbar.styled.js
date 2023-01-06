import styled from "styled-components";

const NavbarWrapper = styled.nav`
  & h2 {
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 2rem;
  }
  & .social-icons {
    justify-content: center;
  }
  & svg {
    cursor: pointer;

    &:hover {
      & path {
        fill: hsl(var(--clr-primary));
      }
    }
  }

  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-inline: 2em;
  }
`;

export default NavbarWrapper;
