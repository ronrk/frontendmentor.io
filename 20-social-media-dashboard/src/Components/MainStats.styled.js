import styled from "styled-components";

const MainStatsWrapper = styled.div`
  background-color: var(--cardBG);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  padding: 2rem 4rem;
  border-radius: 5px;
  min-height: 15vw;
  min-width: 20%;
  border-top: 2px solid;

  cursor: pointer;

  @media screen and (max-width: 800px) {
    min-width: 70%;
  }

  &:hover {
    background-color: var(--backgroundColor-top);
  }

  & .icon {
    display: flex;
    align-items: center;
    gap: 1rem;
    & span {
      color: var(--text-light);
      font-size: 1.3rem;
    }
  }

  & .stats {
    & h2 {
      color: var(--text);
      font-size: 4rem;
    }
    & span {
      color: var(--text-light);
      text-transform: uppercase;
      letter-spacing: 2.5px;
    }
  }

  & .change {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    & span {
      text-transform: capitalize;
      font-size: 1rem;
      font-weight: 700;
      &.up {
        color: var(--lime-green);
      }
      &.down {
        color: var(--bright-red);
      }
    }
  }
`;

export default MainStatsWrapper;
