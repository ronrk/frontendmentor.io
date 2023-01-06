import styled from "styled-components";

const StrengthWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 0.6em 1em;
  input {
    -webkit-appearance: none;
    appearance: none;

    display: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
    }
  }
  & .strength-wrapper {
    align-items: center;
  }
  & .strenth-slider {
    display: flex;
    gap: 0.5em;
    height: 100%;
    & .strength-box {
      height: 100%;
      width: 10px;
      aspect-ratio: 0.3;
      border: 1px solid var(--clr-white);
      cursor: pointer;

      &:hover {
        background-color: var(--clr-gray);
      }
    }
  }
`;

export default StrengthWrapper;
