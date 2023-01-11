import styled from "styled-components";

const APIResultsWrapper = styled.div`
  & .shortening-box {
    align-items: center;
    padding: 1em 2em;
    margin-block: 1em;
    & hr {
      display: none;
    }
    & span {
      flex: 1;
    }
    & button {
      border-radius: 6px;

      &.copied {
        background-color: var(--color-primary-dark);
      }
    }
  }

  @media screen and (max-width: 850px) {
    & .shortening-box {
      flex-direction: column;
      align-items: flex-start;
      & hr {
        display: block;
        border: 1px solid var(--color-primary-dark);
        width: 100%;
      }

      & button {
        width: 100%;
        aspect-ratio: 10;
      }
    }
  }
`;

export default APIResultsWrapper;
