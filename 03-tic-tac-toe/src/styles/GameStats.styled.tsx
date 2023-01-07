import styled from "styled-components";

const GameStatsWrapper = styled.div`
  margin-block: 1rem;
  & .you,
  & .ties,
  & .opponent {
    --gap: 1em;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 33%;
    border-radius: 6px;
    padding-block: 0.5em;
  }
`;

export default GameStatsWrapper;
