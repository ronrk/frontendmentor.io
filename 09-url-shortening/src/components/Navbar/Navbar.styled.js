import styled from "styled-components";

const NavbarWrapper = styled.header`
  position: relative;
  padding-block: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  & .logo {
    transform: scale(1.3);
  }
  & .menu-btn {
    font-size: 2em;
    @media screen and (min-width: 850px) {
      display: none;
    }
  }
  & .nav {
    display: none;
    @media screen and (min-width: 850px) {
      display: block;
      flex: 1;
      & ul {
        display: flex;

        gap: 1.5rem;

        & li {
          & a {
            &:hover {
              color: var(--color-primary-dark);
            }
          }
        }
      }
    }
  }
  & .btns-container {
    display: none;
    @media screen and (min-width: 850px) {
      display: flex;
      gap: 1rem;
    }
  }
`;

export default NavbarWrapper;
