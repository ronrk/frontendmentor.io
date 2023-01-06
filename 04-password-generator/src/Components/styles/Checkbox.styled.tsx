import styled from "styled-components";

const CheckboxWrapper = styled.div`
  & .form-checkbox {
    align-items: center;
    position: relative;
    & label {
      cursor: pointer;
    }
  }

  & .check-icon {
    position: absolute;
    left: 0.1em;
  }

  & input {
    --webkite-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    position: relative;
    display: flex;

    &::before {
      width: 100%;
      height: 100%;
      content: "";
      background-color: var(--clr-gray-dark-2);
      position: absolute;
      display: block;
    }

    &:checked {
      &::before {
        background-color: var(--clr-green);
      }
    }
  }
`;

export default CheckboxWrapper;
