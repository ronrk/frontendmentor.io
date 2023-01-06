import styled from "styled-components";

const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  & input {
    width: 100%;
  }

  & .btn--copy {
    transform: all 0.2s;
    &:hover {
      opacity: 0.6;
    }
    &:active {
      filter: brightness(220%);
    }
  }
`;

export default Wrapper;
