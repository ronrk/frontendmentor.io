import styled from "styled-components";

const MediaActions = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  z-index: 30000;

  padding: 1em;
  & .icon {
    transform: scale(1.3);
  }
  & .btn-bookmark {
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: end;
    align-self: start;
  }
  & .btn-play {
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: center;
    align-self: center;
    display: flex;
    align-items: center;
    gap: 1em;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 1.3em;
    border-radius: 100px;
  }
`;

export default MediaActions;
