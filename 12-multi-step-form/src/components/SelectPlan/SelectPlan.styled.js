import styled from "styled-components";

const SelectPlanWrapper = styled.div`
  & .radio-container {
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    margin-bottom: 2rem;
    position: relative;

    @media screen and (max-width: 650px) {
      flex-direction: column;

      align-items: stretch;
    }
    & .error {
      position: absolute;
      top: -2rem;
      right: 0;
      font-size: 1.4rem;
      color: var(--strawberry-red);
    }
  }

  & .radio-input__content {
    padding: 1rem;
    border-radius: 6px;
    min-height: 17rem;
    width: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    border: 1px solid var(--light-gray);
    transition: all 0.2s;

    @media screen and (max-width: 650px) {
      width: 25rem;
      margin: 0 auto;
      align-items: center;
    }

    & img {
      /* flex: 1; */
      margin-bottom: auto;
      width: 50px;
    }

    & h4 {
      text-transform: capitalize;
      font-size: 1.7rem;
      color: var(--marine-blue);
    }

    & span {
      color: var(--cool-gray);
      font-size: 1.4rem;
      letter-spacing: 1.3px;
      margin-top: 0.4rem;
    }

    &:hover {
      background-color: var(--magnolia);
      border-color: var(--light-gray);
    }
  }
  input[type="radio"] {
    appearance: none;
    visibility: hidden;
    display: none;
  }

  & input:checked + label {
    & .radio-input__content {
      height: 10rem;
      background-color: var(--light-gray);
      border-color: var(--marine-blue);
    }
  }

  & .form-control.checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-gray);
    font-size: 1.6rem;
    gap: 1.5rem;
    color: var(--marine-blue);
    padding: 1.3rem;
    border-radius: 6px;

    label {
      transition: all 0.1s ease-in;
      cursor: pointer;
    }

    label.active {
      font-weight: 700;
    }

    input {
      appearance: none;
      background-color: var(--marine-blue);
      width: 3.5rem;
      height: 1.9rem;
      border-radius: 100px;
      position: relative;
      cursor: pointer;

      &::before {
        content: "";
        background-color: var(--white);
        display: block;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        top: 2.5px;
        left: 2.5px;
        transition: all 0.1s ease-in;
      }

      &.active {
        &::before {
          right: 2px;
          left: auto;
        }
      }
    }
  }
`;

export default SelectPlanWrapper;
