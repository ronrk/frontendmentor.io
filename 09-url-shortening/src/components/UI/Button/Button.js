import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding-inline: 2em;
  aspect-ratio: 3.2;
  border-radius: 100px;
  letter-spacing: 1.2px;
  font-weight: 500;

  &.fullWidth {
    /* width: 100%; */
    /* aspect-ratio: 8; */
    /* border-radius: 6px; */
  }
  &.transparent {
    &:hover {
      color: var(--color-primary-dark);
      font-weight: 500;
    }
  }
  &.primary {
    background-color: var(--color-primary);
    transition: opacity 250ms linear;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const Button = ({ children, className, ...rest }) => {
  return (
    <StyledButton className={className} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
