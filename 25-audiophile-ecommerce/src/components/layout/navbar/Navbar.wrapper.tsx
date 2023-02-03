import styled from "styled-components";

const NavbarWrapper = styled.nav`
  padding-block: 2rem;
  & .container {
    justify-content: space-between;
    align-items: center;

    & ul {
      --gap: 3rem;
    }
  }

  & .icon {
    max-width: 50;
  }
`;

export default NavbarWrapper;
