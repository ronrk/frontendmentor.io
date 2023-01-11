import styled from "styled-components";

const OverviewStatsWrapper = styled.div`
  background-color: var(--cardBG);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  gap: 2rem;
  padding: 2rem;
  border-radius: 4px;
  
  min-width: 20%;

  cursor: pointer;

  @media screen and (max-width:800px) {
    min-width: 30%;
    
  }
  @media screen and (max-width:650px) {
    min-width: 90%;
    
  }

  &:hover {
    background-color: var(--backgroundColor-top);
  }

  & .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h3 {
      color: var(--text-light);
    }
  }

  & .stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h4 {
      font-size: 2.6rem;
    }

    & span {
      display: flex;
      align-items: center;
      gap: .2rem;
      font-size: 1rem;

      font-weight: 700;
      
      &.up {
        color: var(--lime-green);
      }
      &.down {
        color: var(--bright-red);
      }
  }
`;

export default OverviewStatsWrapper;
