import styled from "styled-components";

const NavbarWrapper = styled.nav`
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;
  width: 80%;
  margin: 0 auto;
  height: 10rem;

  border-bottom: 1px solid var(--grey-light);

  @media screen and (max-width: 850px) {
    justify-content: space-between;

    width: 100%;
  }

  & .nav__logo {
    @media screen and (max-width: 850px) {
      margin-right: auto;
    }
  }

  & .nav__list {
    flex: 1;
    list-style: none;
    display: flex;
    align-items: stretch;
    gap: 3rem;
    align-self: stretch;

    @media screen and (max-width: 850px) {
      display: none;
    }

    & li {
      /* display: flex; */
      align-items: center;
      & a {
        text-decoration: none;
        font-size: 1.7rem;
        color: var(--text-light);
        height: 100%;
        display: flex;
        align-items: center;
        border-radius: 2px;
        transition: all 0.2s;

        &:hover {
          border-bottom: 0.4rem solid var(--orange);
          color: var(--text-dark);
        }
      }
    }
  }

  & .nav__actions {
    /* flex: 0.15; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    & .btn-cart_box {
      position: relative;
    }

    & .cart_number-items {
      position: absolute;
      top: -1rem;
      right: -0.3rem;
      background-color: var(--orange);
      padding: 0.1rem 0.6rem;
      color: var(--white);
      border-radius: 10000px;
      font-size: 1.1rem;
    }

    & img {
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      transition: all 0.2s;
      background-origin: content-box;

      &:hover {
        border: 2px solid var(--orange);
      }
    }

    & svg {
      transition: all 0.2s;
      & path {
        transition: all 0.2s;
      }
      &:hover {
        transform: scale(1.2);
        & path {
          fill: var(--text-dark);
        }
      }
    }
  }
`;

export default NavbarWrapper;
