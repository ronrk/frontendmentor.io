import styled from "styled-components";

const MobileMenuWrapper = styled.div`
  display: none;
  position: absolute;
  min-height: 50vh;
  width: 90vw;
  background-color: var(--white);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  box-shadow: 0 0 4rem rgba(0, 0, 0, 0.3);
  border-radius: 6px;

  &.show {
    display: block;
    display: flex;
    align-items: stretch;
    justify-content: center;
  }

  & ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;

    & li {
      & a {
        text-decoration: none;
        font-size: 2rem;
        color: var(--dark-blue);
        font-family: var(--font);
        letter-spacing: 1.3px;
        transition: all 0.2s;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

export default MobileMenuWrapper;
