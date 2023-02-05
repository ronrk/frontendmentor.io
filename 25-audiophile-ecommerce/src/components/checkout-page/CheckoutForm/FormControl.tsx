import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  className: string;
  fullWidth?: boolean;
  checkbox?: boolean;
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

const FormControl: FC<IProps> = ({ children, className, fullWidth }) => {
  let classes = `${className} ${fullWidth ? "fullWidth" : ""}`;

  return (
    <FormControlWrapper className={classes}>{children}</FormControlWrapper>
  );
};

export default FormControl;
