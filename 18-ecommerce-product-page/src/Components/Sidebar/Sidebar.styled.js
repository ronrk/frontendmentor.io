import styled from "styled-components";

const SidebarWrapper = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  width: 60%;
  z-index: 20000;
  background-color: var(--white);

  flex-direction: column;
  align-items: center;
  padding: 4rem;

  transform: translateX(-85%);
  /* width: 10%; */
  /* overflow: hidden; */
  /* display: none; */
  visibility: hidden;

  transition: all 0.2s ease-in;

  &.show {
    transition: all 0.2s ease-in;
    visibility: visible;
    display: flex;
    transform: translateX(0);
    width: 60%;
  }
  & .btn-close {
    align-self: flex-end;

    & svg {
      transform: scale(2.3);
      & path {
        fill: var(--orange);
      }
    }
  }

  & .sidebar__list {
    align-self: flex-start;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    & li {
      & a {
        text-decoration: none;
        font-size: 2.6rem;
        color: var(--text-dark);
        font-weight: 700;

        &:hover {
          text-decoration: underline;
          font-size: 3rem;
        }
      }
    }
  }
`;

export default SidebarWrapper;
