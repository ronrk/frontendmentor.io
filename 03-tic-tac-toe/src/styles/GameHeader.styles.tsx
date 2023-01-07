import styled from "styled-components";

const GameHeaderWrapper = styled.header`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  & .player {
    align-items: center;
    justify-content: center;
    padding-inline: 1rem 2rem;
    --gap: 0;
    box-shadow: var(--shadow) #10212a;
    & .icon {
      transform: scale(0.5);
      /* margin-right: -2rem; */
      & svg,
      path {
        fill: var(--clr-gray-dark);
      }
    }
  }
`;

export default GameHeaderWrapper;
