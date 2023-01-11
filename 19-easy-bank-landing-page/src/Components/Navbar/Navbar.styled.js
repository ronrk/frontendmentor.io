import styled from "styled-components";

const NavbarWrapper = styled.nav`
  grid-column: full-start / full-end;
  grid-row: 1/2;
  background-color: var(--light-grayish-blue);
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding-top: 2rem;
  position: relative;
  z-index: 10;

  & .btn-req {
    margin-bottom: 1rem;
  }

  & .nav__list {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 3rem;
    font-size: 1.5rem;

    & li {
      align-self: stretch;
      display: flex;

      & a {
        color: var(--grayish-blue);
        height: 100%;
        /* margin-top: 1rem; */
        &:hover {
          border-bottom: 3px solid var(--lime-green);
        }
      }
    }
  }

  & .btn-menu {
    display: none;
  }

  @media screen and (max-width: 950px) {
    justify-content: space-between;
    padding: 2rem 4rem;
    & .nav__list,
    & .btn-req {
      display: none;
    }
    & .btn-menu {
      display: block;
    }
  }
`;

export default NavbarWrapper;
