import styled from "styled-components";

const YourInfoWrapper = styled.div`
  & .form-control {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
    & .error-msg {
      position: absolute;
      right: 0;
      top: 3px;
      color: var(--strawberry-red);
      font-size: 1.3rem;
      font-weight: 500;
      visibility: hidden;
      opacity: 0;
      transition: all 0.1s;
    }

    & label {
      font-size: 1.7rem;
      color: var(--marine-blue);
    }

    & input {
      height: 4rem;
      border-radius: 8px;
      border: 2px solid;
      border-color: var(--light-gray);
      background: transparent;
      cursor: pointer;
      padding: 1rem;
      transition: all 0.2s;

      &.error {
        border-color: var(--strawberry-red);

        & + span {
          visibility: visible;
          opacity: 1;
        }
      }

      &:hover {
        border-color: var(--marine-blue);
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

export default YourInfoWrapper;
