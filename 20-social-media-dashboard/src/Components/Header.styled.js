import styled from "styled-components";

const HeaderWrapper = styled.header`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  & .title {
    & h1 {
      font-size: 2.7rem;
      color: var(--text);
      margin-bottom: 0.3rem;
      letter-spacing: 1.2px;
    }
    & span {
      font-size: 1.4rem;
      color: var(--text-light);
      letter-spacing: 1.1px;
    }
    @media screen and (max-width: 800px) {
      border-bottom: 1px solid var(--text-light);
      margin: 0 auto;
      padding-bottom: 2rem;

      & h1 {
        margin-bottom: 1rem;
      }
    }
  }

  & .toggle {
    display: flex;
    align-items: center;
    gap: 1rem;
    & span {
      color: var(--text-light);
      font-size: 1.2rem;
      letter-spacing: 1.1px;
    }

    & .btn-toggle-theme {
      width: 5rem;
      height: 2.3rem;
      border-radius: 100px;
      background: var(--toggle);
      /* background-image: var(--toggl) */
      position: relative;

      &:checked {
        &::after {
          transform: translateX(-130%);
        }
      }

      &::after {
        display: block;
        position: absolute;
        content: "";
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: var(--backgroundColor);
        right: 0.3rem;
        top: 0.15rem;
      }
    }

    @media screen and (max-width: 800px) {
      width: 90%;
      justify-content: space-between;
      margin: 0 auto;
    }
  }
`;

export default HeaderWrapper;
