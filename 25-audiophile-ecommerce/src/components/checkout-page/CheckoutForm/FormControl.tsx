import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

interface IProps {
  value: string;
  type: string;
  errorMsg: string;
  fullWidth?: boolean;
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  pattern?: any;
}

const FormControlWrapper = styled.div`
  flex-basis: 47%;
  --gap: 0em;
  justify-content: flex-start;
  /* position: relative; */

  & input:invalid.focused ~ .error-msg {
    display: block;
  }

  & .error-msg {
    display: none;

    color: red;
    font-weight: 500;
    font-size: var(--fs-200);
    right: 0rem;
    top: 5.5rem;
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
    &:invalid.focused {
      border-color: red;
      border-width: 2px;
    }
  }
`;

const FormControl: FC<IProps> = ({
  value,
  required,
  errorMsg,
  type,
  fullWidth,
  label,
  name,
  onChange,
  placeholder,
  pattern,
}) => {
  const [focused, setFocused] = useState(false);
  let classes = `${"form-control flex-col"} ${fullWidth ? "fullWidth" : ""}`;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  return (
    <FormControlWrapper className={classes}>
      <label htmlFor={name} className="fw-b text-black">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        onBlur={handleFocus}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${errorMsg ? "error" : ""} ${focused ? "focused" : ""}`}
        required={required}
        pattern={pattern}
      />
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </FormControlWrapper>
  );
};

export default FormControl;
