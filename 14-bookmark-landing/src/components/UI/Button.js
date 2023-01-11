import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: inherit;
  font-size: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
  padding: 0.8em 2em;
  border-radius: 6px;
  /* aspect-ratio: 7; */
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  &.filled {
    transition: background-color 0.2s;
    &.red {
      background-color: hsl(var(--color-secondary));
      color: #fff;
      &:hover {
        background-color: hsl(var(--color-primary));
      }
    }
    &.blue {
      background-color: hsl(var(--color-primary));
      color: #fff;
    }
    &.gray {
      background-color: hsl(var(--color-text-light), 0.2);
      color: hsl(var(--color-text-dark));
    }
    &.gray:hover,
    &.blue:hover {
      background-color: hsl(var(--color-secondary));
      color: #fff;
    }
  }
  &.fullWidth {
    width: 100%;
  }
  &.outlined {
    background: transparent;
    border: 0.1em solid currentColor;
  }

  &.hoverRed {
    transition: all 0.2s;
    &:hover {
      background-color: hsl(var(--color-secondary));
      border-color: hsl(var(--color-secondary));
    }
  }
`;

const Button = ({ children, className, fullWidth, outlined }) => {
  return (
    <StyledButton
      className={fullWidth ? `${className} fullWidth` : `${className}`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
