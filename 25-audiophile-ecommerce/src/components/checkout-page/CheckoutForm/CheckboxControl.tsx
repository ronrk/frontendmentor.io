import { FC, useState } from "react";
import styled from "styled-components";
import { Payment } from "../../../../pages/checkout";

interface IProps {
  onChange: (method: Payment) => void;
  paymentMethod: Payment | null;
}

const CheckboxControlWrapper = styled.div`
  flex-basis: 47%;
  --gap: 0.5em;
  justify-content: space-between;
  position: relative;
  justify-content: space-between;
  min-width: 100%;

  & .error-msg {
    position: absolute;
    color: red;
    font-weight: 500;
    font-size: var(--fs-200);
    right: 2rem;
  }

  & .flex-col {
    flex-grow: 0.4;
  }
  & .checkbox__input {
    align-items: center;
    cursor: pointer;
    padding-inline: 0.5em;
    border-radius: 8px;
    border: 2px solid hsl(var(--clr-black), 0.3);
    /* flex-grow: 0.5; */
    display: flex;
    transition: all 0.2s;

    & label {
      padding: 1rem;
      width: 100%;
    }

    & input {
      appearance: none;
      border: 0;
      position: relative;

      &::before {
        position: relative;
        content: "";
        display: block;
        width: 25px;
        aspect-ratio: 1;
        border-radius: 50%;
        /* background-color: red; */
        border: 1px solid hsl(var(--clr-black), 0.4);
        left: 0;
        top: 0;
      }
      &::after {
        position: absolute;
        background-color: hsl(var(--clr-primary));
        width: 35%;
        aspect-ratio: 1;
        content: "";
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all 0.2s;
      }
      &:focus {
        border-color: hsl(var(--clr-primary));
      }
      &.error {
        border-color: red;
        border-width: 2px;
      }
    }
    &:hover {
      border-color: hsl(var(--clr-primary-light), 0.5);
    }
    &.checked {
      border-color: hsl(var(--clr-primary));
      &:hover {
        border-color: hsl(var(--clr-primary));
      }
      & input {
        &::after {
          opacity: 1;
        }
      }
    }

    & > * {
      cursor: pointer;
    }
  }
  &.fullWidth {
    min-width: 100%;
  }
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const CheckboxControl: FC<IProps> = ({ onChange, paymentMethod }) => {
  return (
    <CheckboxControlWrapper className="flex">
      <label htmlFor="payment" className="fw-b text-black">
        Payment Method
      </label>
      <div className="flex-col">
        <div
          className={`checkbox__input ${
            paymentMethod === "e-money" ? "checked" : ""
          }`}
        >
          <input
            type="checkbox"
            name="payment"
            id="e-money"
            value="e-money"
            checked={paymentMethod === "e-money"}
            onChange={() => onChange("e-money")}
          />
          <label htmlFor="e-money">e-Money</label>
        </div>
        <div
          className={`checkbox__input ${
            paymentMethod === "cash" ? "checked" : ""
          }`}
        >
          <input
            type="checkbox"
            name="payment"
            value="cash"
            id="cash"
            checked={paymentMethod === "cash"}
            onChange={(e) => onChange("cash")}
          />
          <label htmlFor="cash">Cash on Delivery</label>
        </div>
      </div>
    </CheckboxControlWrapper>
  );
};

export default CheckboxControl;
