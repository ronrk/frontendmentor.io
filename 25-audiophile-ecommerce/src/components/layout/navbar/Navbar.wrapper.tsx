import styled from "styled-components";

const NavbarWrapper = styled.nav`
  padding-block: 2rem;
  position: relative;
  & .container {
    justify-content: space-between;
    align-items: center;

    & ul {
      --gap: 3rem;

      & li {
        & a:hover {
          color: hsl(var(--clr-primary));
        }
      }
    }
  }

  & .cart--btn:hover {
    & .icon {
      & > * {
        fill: hsl(var(--clr-primary));
      }
    }
  }

  & .icon & .logo {
    /* max-width: 50px; */
    min-width: 100px;
  }

  & .btn--mobileMenu {
    display: none;
  }

  @media screen and (max-width: 900px) {
    & .btn--mobileMenu {
      display: block;
    }
    & .container {
      justify-content: space-between;
      width: 100%;
    }
    & .logo {
      /* flex-grow: 1; */
      margin-right: auto;
    }

    & .cart--btn {
      /* flex-grow: 1; */
      /* justify-self: end; */
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }

    & ul {
      display: none;
    }
  }
`;

export default NavbarWrapper;
