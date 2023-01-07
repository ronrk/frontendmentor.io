import styled from "styled-components";

const EndGameModalWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.6);

  & .modal {
    width: 100%;
    height: 30%;
    align-items: center;
    justify-content: center;
    & .btn-container {
      --gap: 0.3em;
    }
    & h2 {
      --gap: 0.4em;
      align-items: center;
    }
  }
`;

export default EndGameModalWrapper;
