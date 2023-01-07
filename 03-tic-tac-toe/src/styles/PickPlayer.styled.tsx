import styled from "styled-components";

const PickPlayerStyled = styled.section`
  --gap: 2rem;
  padding-block: 2rem;
  margin-bottom: 2rem;
  box-shadow: inset 0px -8px 0px #10212a;
  & .radio-group {
    justify-content: space-evenly;
    padding: 1em 0.8rem;
    border-radius: 10px;
    --gap: 0;
    & label {
      width: 100%;
      flex-grow: 1;
      /* padding-block: 1em; */
      transition: all 0.2s;
      cursor: pointer;
      & .icon {
        transform: scale(0.7);
        & svg,
        & path {
          fill: var(--clr-gray-dark);
          stroke: var(--clr-gray-dark);
          transition: all 0.2s;
        }
      }
    }
    & input {
      display: none;

      &:checked {
        & + label {
          background-color: var(--clr-gray-dark);

          & .icon {
            & svg,
            & path {
              fill: var(--clr-blue-dark);
              stroke: var(--clr-blue-dark);
            }
          }
        }
      }
    }
  }

  & p {
    opacity: 0.6;
  }
`;

export default PickPlayerStyled;
