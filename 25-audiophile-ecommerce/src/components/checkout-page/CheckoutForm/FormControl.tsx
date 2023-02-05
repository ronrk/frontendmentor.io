import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  value: string;
  type: string;
  isError: boolean;
  fullWidth?: boolean;
  checkbox?: boolean;
  label: string;
  name: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  onFocus: () => void;
  placeholder: string;
}

const FormControlWrapper = styled.div`
  flex-basis: 47%;
  --gap: 0.5em;
  justify-content: space-between;
  position: relative;

  & .error-msg {
    position: absolute;
    color: red;
    font-weight: 500;
    font-size: var(--fs-200);
    right: 2rem;
  }

  &.fullWidth {
    min-width: 100%;
  }

  &.checkbox {
    justify-content: space-between;
    min-width: 100%;

    & .flex-col {
      flex-grow: 0.5;
    }

    & .checkbox__input {
      cursor: pointer;
      padding-inline: 0.3em;
      /* padding: 1rem; */
      border-radius: 8px;
      border: 2px solid hsl(var(--clr-black), 0.3);
      flex-grow: 1;
      display: flex;
      transition: all 0.2s;

      & label {
        padding: 1rem;
        width: 100%;
      }

      & input {
        appearance: none;
        /* display: none; */
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
          width: 20%;
          aspect-ratio: 1;
          content: "";
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: all 0.2s;
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
  }

  & input {
    border: 1px solid hsla(var(--clr-black-light), 0.4);
    padding: 1rem;
    border-radius: 8px;

    &:focus {
      border-color: hsl(var(--clr-primary));
    }
    &.error {
      border-color: red;
      border-width: 2px;
    }
  }
`;

const FormControl: FC<IProps> = ({
  value,
  isError,
  type,
  fullWidth,
  checkbox,
  label,
  name,
  onChange,
  onBlur,
  onFocus,
  placeholder,
}) => {
  let classes = `${"form-control flex-col"} ${fullWidth ? "fullWidth" : ""} ${
    checkbox ? "checkbox" : ""
  }`;

  return (
    <FormControlWrapper className={classes}>
      {isError && <p className="error-msg">Invalid field</p>}
      <label htmlFor={name} className="fw-b text-black">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={isError ? "error" : ""}
      />
    </FormControlWrapper>
  );
};

export default FormControl;
