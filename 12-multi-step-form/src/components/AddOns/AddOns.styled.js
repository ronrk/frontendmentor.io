import styled from "styled-components";
import checkedIcon from "../../assets/images/icon-checkmark.svg";

const AddOnsWrapper = styled.div`
  & .form-control {
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid var(--cool-gray);
    border-radius: 6px;
    padding: 2rem 1rem;
    transition: all 0.2s;

    &:hover {
      border-color: var(--marine-blue);
    }

    &.active {
      background-color: var(--magnolia);
      border-color: var(--marine-blue);
    }

    label {
      width: 100%;
    }

    input[type="checkbox"] {
      appearance: none;
      /* display: none; */
      cursor: pointer;

      &::before {
        content: "";
        display: block;
        position: relative;
        width: 1.7rem;
        height: 1.7rem;
        background-color: var(--purplish-blue);
        border-radius: 6px;
      }

      &.active {
        &::before {
          background-image: url(${checkedIcon});
          background-repeat: no-repeat;
          background-position: center;
          background-size: 15px;
        }
      }
    }
  }

  & .checkbox-label__content {
    display: flex;
    align-items: center;
    cursor: pointer;

    h4 {
      font-size: 1.4rem;
      color: var(--marine-blue);
      margin-bottom: 0.3rem;
    }
    p {
      color: var(--cool-gray);
      font-size: 1.1rem;
      font-weight: 500;
      letter-spacing: 0.6px;
    }

    & .price {
      margin-left: auto;
      font-size: 1.3rem;
      color: var(--purplish-blue);
    }
  }
`;

export default AddOnsWrapper;
